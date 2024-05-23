import Dashboard from '../../components/Admin/Dashboard';
import ManageOrders from '../../components/Admin/ManageOrders';
import ManageUsers from '../../components/Admin/ManageUsers';

const AdminHome = () => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <Dashboard />
      <ManageOrders />
      <ManageUsers />
    </div>
  );
};

export default AdminHome;
