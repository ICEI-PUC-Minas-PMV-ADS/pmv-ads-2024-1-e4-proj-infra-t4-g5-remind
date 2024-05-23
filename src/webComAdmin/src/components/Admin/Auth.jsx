import { Redirect } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import PropTypes from 'prop-types';

const Auth = ({ children }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Redirect to="/adm/login" />;
  }

  return children;
};

Auth.propTypes = {
    children: PropTypes.node.isRequired,
  };

export default Auth;
