//Register.jsx

import { useState } from 'react';
import PropTypes from 'prop-types';

const Register = ({ onButtonClick, selectedPlan }) => {

  const [showPassword, setShowPassword] = useState(false);
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleButtonClick = (event) => {
    event.preventDefault();
    if (userName && email && password && termsAccepted) {
      onButtonClick(selectedPlan);
    } else {
      alert('Por favor, preencha todos os campos e aceite os termos e condições.');
    }
  };

  return (

    <div className='buynow-cards-container'>
      <div className='buynow-card-grid-3'>
        <div className='buynow-card-border'> 
          <h3 className='buynow-card-title pb-10'>Produto Selecionado:</h3>
          <h3 className='buynow-card-title'>{selectedPlan.title}</h3>
          {selectedPlan.mostPopular && (
            <p className='buynow-card-border-popular'>
              Mais Popular
            </p>
          )}
          <p className='mt-4 buynow-card-text-sm'> 
            {selectedPlan.description}
          </p>
          <div className='mt-4 buynow-card-inside-black'>
            <p className='buynow-card-sale'>
              <span>{selectedPlan.currency}</span>
              <span className='ml-3 text-4xl text-neutral-200'>${selectedPlan.price}</span>
              <span>{selectedPlan.frequency}</span>
            </p>
          </div>

          <ul className='buynow-card-ul mt-6'>
            {selectedPlan.features.map((feature, index) => (
              <li key={index} className='buynow-card-text-sm'>
                * {feature}
              </li>
            ))}
          </ul>

        </div>

      <form className='-mx-4 buynow-card-border'>
      <div className='pb-6 flex flex-col items-center justify-center'>
        <h2 className='buynow-card-title pb-6'>Registre o Administrador</h2>
        <div>
        <p className='mt-4 buynow-card-text-sm'> 
            <span className='font-semibold'>Dados de Registro do Administrador do Remind. </span>
             Serão solicitados para o acesso ao painel de controles da aplicação.
          </p>
        </div>
      </div>
      <div>
        <div className='buynow-input-text'>
          <label htmlFor="userName" className='buynow-card-text-sm'>Nome</label>
          <input className='w-full' type="text" id="Name" name="Name" required onChange={(e) => setUserName(e.target.value)} />
        </div>
        <div className='buynow-input-text'>
          <label htmlFor="email" className='buynow-card-text-sm'>E-mail</label>
          <input className='w-full' type="email" id="email" name="email" required onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className='buynow-input-text'>
          <label htmlFor="password" className='buynow-card-text-sm'>Senha</label>
          <input className='w-full' type={showPassword ? "text" : "password"} id="password" name="password" required onChange={(e) => setPassword(e.target.value)} />
          <div className="flex justify-end mt-2">
          <button className='flex justify-end text-xs text-purple-400 pb-4' type="button" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? 'Esconder' : 'Mostrar'}
          </button>
          </div>
        </div>
        </div>
        <div className="checkbox-container">
          <input type="checkbox" id="terms" name="terms" className='mx-2 -mt-3' required onChange={(e) => setTermsAccepted(e.target.checked)} />
          <label htmlFor="terms" className="checkbox-text-link">
                    Li e aceito e concordo com os Termos e Condições 
            </label>
        </div>
        <button href='#'
          onClick={handleButtonClick}
          className='mt-8 btn-buynow'
        >
          Continuar e Pagar
        </button>
      </form>
      <div className='buynow-card-border'> 
          <h3 className='buynow-card-title pb-6'>Mais Informações:</h3>
          <div className='buynow-card-inside-black'>
            <ul className='buynow-card-ul'>
              {selectedPlan.moreFeatures.map((feature, index) => (
                <li key={index} className='text-sm leading-6 text-neutral-200'>
                  * {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

Register.propTypes = {
    onButtonClick: PropTypes.func.isRequired,
    selectedPlan: PropTypes.object.isRequired,
  };

export default Register;
