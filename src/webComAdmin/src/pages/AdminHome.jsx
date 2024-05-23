import { useAuth } from '../context/AuthContext';

const AdminHome = () => {
  const { logout } = useAuth();

  return (
    <div>
      <h1>Admin Home</h1>
      <button onClick={logout}>Logout</button>
      {/* admin dashboard component */}
    </div>
  );
};

export default AdminHome;
