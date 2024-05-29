
import logoName from '../assets/logoName.svg'
import '../App.css'

const Layout = () => {
    return (
      <>
        <div className="flex-center">
          <img src={logoName} className="logo" alt="Logo" />
        </div>
        <p className="read-the-docs">
          Área dedicada a Administradores do Sistema.
        </p>
      </>
    );
  };
  
  export default Layout;
