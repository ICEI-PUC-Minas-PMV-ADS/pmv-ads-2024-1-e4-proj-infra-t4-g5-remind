import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';

const AdminHome = () => {
  const { logout } = useAuth();

  return (
    <div>
      <h1>Admin Home</h1>
      <button onClick={logout}>Logout</button>
      {/* admin dashboard component */}
      <Link to="/admin/register">Criar Novo Usuário</Link>
    </div>
  );
};

export default AdminHome;

