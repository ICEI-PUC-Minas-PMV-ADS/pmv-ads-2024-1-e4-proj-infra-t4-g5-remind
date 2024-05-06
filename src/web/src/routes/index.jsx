import { Route, Routes, Navigate } from 'react-router-dom';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import Home from '../pages/Home';
import Usuario from '../pages/Usuario';
import ProtectedRoute from './ProtectedRoute';

export default function Router() {
  return (
    <Routes>
      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<Navigate to={'/recebidas'} />} />
        <Route path="/recebidas" element={<Home />} />
        <Route path="/enviadas" element={<Home />} />
        <Route path="/u" element={<Usuario />} />
      </Route>

      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
