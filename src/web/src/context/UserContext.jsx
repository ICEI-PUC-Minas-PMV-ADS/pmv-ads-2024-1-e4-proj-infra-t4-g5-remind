import { createContext, useState, useEffect, useCallback } from 'react';
import { getUser } from '../services/userServices';
import { useNavigate } from 'react-router-dom';

// o UserContext é um contexto que armazena informações do usuário logado
export const UserContext = createContext();

// o UserProvider é um componente que provê o contexto do usuário
export default function UserProvider({ children }) {
  const [signed, setSigned] = useState(undefined);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const logout = useCallback(() => {
    localStorage.removeItem('USER_TOKEN');
    localStorage.removeItem('USER_ID');
    setSigned(false);
    setUser(null);
    navigate('/login');
  }, [navigate]);

  useEffect(() => {
    const loadSigned = async () => {
      const localSigned = localStorage.getItem('USER_TOKEN');
      setSigned(!!localSigned);

      const secureUserId = localStorage.getItem('USER_ID');
      if (secureUserId) {
        const userInfo = await getUser(secureUserId);
        setUser(userInfo);
      }
    };

    loadSigned();
  }, [signed]);

  return (
    <UserContext.Provider
      value={{
        signed,
        setSigned,
        user,
        setUser,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
