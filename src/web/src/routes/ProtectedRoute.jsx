import { Navigate, Outlet } from 'react-router-dom';
import useUser from '../context/UserContextHook';
import Loading from '../components/Loading';

export default function ProtectedRoute() {
  const { signed } = useUser();

  if (signed === undefined) {
    return <Loading />;
  }

  return signed ? <Outlet /> : <Navigate to="/login" />;
}
