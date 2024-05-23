import { Routes, Route } from 'react-router-dom';
import AdminLogin from './pages/AdminLogin';
import AdminHome from './pages/AdminHome';
import Auth from './components/Auth';
import logoName from '../public/assets/logoName.svg';
import './App.css';

function App() {
  return (
    <>
      <div className="flex-center">
        <img src={logoName} className="logo" alt="Logo" />
      </div>
      <Routes>
        <Route path="/login" element={<AdminLogin />} />
        <Route path="/admin" element={<Auth><AdminHome /></Auth>} />
      </Routes>
      <p className="read-the-docs">
        Área dedicada a Administradores do Sistema.
      </p>
    </>
  );
}

export default App;
