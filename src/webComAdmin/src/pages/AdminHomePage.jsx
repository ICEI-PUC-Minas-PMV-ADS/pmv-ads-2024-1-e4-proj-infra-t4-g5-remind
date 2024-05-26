import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';

const AdminHome = () => {
  const { logout } = useAuth();

  return (
    <div>
      <h1 className="buynow-card-title">Admin Home</h1>
      {/* admin dashboard component */}
      {/* master admin dashboard component */}
      <div className='p-6' >
      <button onClick={logout}>Logout</button>
      </div>
      <div>
      <Link to="/admin/register">
        <button> Criar Novo Usuário</button> </Link>
      </div>
    </div>
  );
};

export default AdminHome;

