
//App.jsx
import { Routes, Route, Link } from 'react-router-dom';
import AdminLoginPage from './pages/AdminLoginPage';
import AdminHomePage from './pages/AdminHomePage';
import AdminRegister from './pages/AdminRegister';

import logoName from './assets/logoName.svg'
import './App.css'


function App() {
  
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<AdminLoginPage />} />
      <Route path="/admin" element={<AdminHomePage />} />
      <Route path="/admin/register" element={<AdminRegister />} />
    </Routes>
  );
}

function Home() {

  return (
    <>
      <div >
        <div className='flex-center'>
          <a>
            <img src={logoName} className="logo" alt="Remind logo" />
          </a>
        </div>

      </div>
      <div className="card">
      <Link to="/login">
        <button className="btn-buynow-popular">
          Adm Login
        </button>
        </Link>
      </div>
      <p className="read-the-docs">
        Área dedicada a Administradores do Sistema.
      </p>
    </>
  )
}

export default App
