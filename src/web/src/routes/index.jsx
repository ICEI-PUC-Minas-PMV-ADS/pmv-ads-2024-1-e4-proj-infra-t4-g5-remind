import { Route, Routes } from 'react-router-dom';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import Home from '../pages/Home';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
