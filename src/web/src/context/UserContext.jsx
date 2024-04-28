import { createContext, useState, useEffect } from 'react';
import { getUser } from '../services/userServices';

export const UserContext = createContext();

export default function UserProvider({ children }) {
  const [signed, setSigned] = useState(undefined);
  const [user, setUser] = useState(null);

  function logout() {
    localStorage.removeItem('USER_TOKEN');
    localStorage.removeItem('USER_ID');
    setSigned(false);
    setUser(null);
  }

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
