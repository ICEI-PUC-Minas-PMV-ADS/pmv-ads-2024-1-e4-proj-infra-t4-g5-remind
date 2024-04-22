import { Route, Routes } from 'react-router-dom';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';

export default function Router() {
  return (
    <Routes>
      {/* <Route path="/" exact element={Home} /> */}
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
