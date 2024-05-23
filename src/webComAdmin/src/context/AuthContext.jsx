import { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => {
    // Lógica de login aqui
    setIsAuthenticated(true);
  };

  const logout = () => {
    // Lógica de logout aqui
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };

export const useAuth = () => useContext(AuthContext);
