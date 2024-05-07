

import { useState } from 'react';
import PropTypes from 'prop-types';

const Register = ({ onButtonClick, selectedPlan }) => {

  console.log("Plano recebido em Register:", selectedPlan);


  const [showPassword, setShowPassword] = useState(false);
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleButtonClick = (event) => {
    event.preventDefault();
    if (userName && email && password && termsAccepted) {
      onButtonClick();
    } else {
      alert('Por favor, preencha todos os campos e aceite os termos e condições.');
    }
  };

  return (

    <div className='relative flex flex-col items-center justify-center bg-black text-neutral-100 p-8 shadow-lg'>
      <div className='mx-auto grid max-w-full grid-cols-3 gap-8 py-2'>
        <div className='relative flex flex-col rounded-2xl border border-purple-500 bg-zinc text-neutral-100 p-8 shadow-lg'> 
          <h3 className='text-2xl font-semibold text-neutral-100 leading-6 pb-10'>Produto Selecionado:</h3>
          <h3 className='text-2xl font-semibold text-neutral-100 leading-5'>{selectedPlan.title}</h3>
          {selectedPlan.mostPopular && (
            <p className='absolute top-0 -translate-y-1/2 rounded-full bg-purple-600 
            px-3 py-0.5 text-sm font-semibold tracking-wide text-neutral-200 shadow-md'>
              Mais Popular
            </p>
          )}
          <p className='mt-4 text-sm leading-6 text-neutral-200'> 
            {selectedPlan.description}
          </p>
          <div className='-mx-6 mt-4 rounded-lg bg-black p-6'>
            <p className='flex items-center text-sm font-semibold text-neutral-200'>
              <span>{selectedPlan.currency}</span>
              <span className='ml-3 text-4xl text-neutral-200'>${selectedPlan.price}</span>
              <span>{selectedPlan.frequency}</span>
            </p>
          </div>

          <ul className='mt-6 space-y-4 flex-1'>
            {selectedPlan.features.map((feature, index) => (
              <li key={index} className='text-sm leading-6 text-neutral-200'>
                * {feature}
              </li>
            ))}
          </ul>

        </div>

      
      <form className='-mx-4 relative flex flex-col items-center justify-center rounded-2xl text-neutral-100 border border-purple-500 bg-zinc  p-8 shadow-lg'>
      <div className='text-neutral-100 text-2xl font-semibold pb-6 flex flex-col items-center justify-center'>
        <h2 className='text-2xl font-semibold text-neutral-100 leading-6 pb-6'>Registre o Administrador</h2>
        <div>
        <p className='mt-4 mx-5 text-sm leading-5 text-neutral-200'> 
            <span className='font-semibold'>Dados de Registro do Administrador do Remind.</span> <br/>
            Serão solicitados para o acesso ao painel de controles da aplicação.
          </p>
        </div>
      </div>
      <div className='text-black pb-4'>
        <div className='text-black pb-4 '>
          <label htmlFor="userName" className='text-neutral-100 text-sm'>Nome</label>
          <input className='w-full' type="text" id="Name" name="Name" required onChange={(e) => setUserName(e.target.value)} />
        </div>
        <div className='text-black pb-4'>
          <label htmlFor="email" className='text-neutral-100 text-sm'>E-mail</label>
          <input className='w-full' type="email" id="email" name="email" required onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className='text-black pb-4'>
          <label htmlFor="password" className='text-neutral-100 text-sm'>Senha</label>
          <input className='w-full' type={showPassword ? "text" : "password"} id="password" name="password" required onChange={(e) => setPassword(e.target.value)} />
          <div className="flex justify-end mt-2">
          <button className='flex justify-end text-xs text-purple-400 pb-4' type="button" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? 'Esconder' : 'Mostrar'}
          </button>
          </div>
        </div>
        </div>
        <div className=" flex-1 flex max-w-7xl -ml-2 -mt-5">
          <input type="checkbox" id="terms" name="terms" className='mx-2 -mt-3' required onChange={(e) => setTermsAccepted(e.target.checked)} />
          <label htmlFor="terms" className="font-semibold text-xs underline text-purple-400">
                    Li e aceito e concordo com os Termos e Condições 
            </label>
        </div>
        <button href='#'
          onClick={handleButtonClick}
          className='mt-8 block rounded-lg px-6 py-4 text-center text-sm font-semibold leading-4 btn-buynow'
        >
          Continuar e Pagar
        </button>
      </form>
      <div className='relative flex flex-col rounded-2xl border border-purple-500 bg-zinc text-neutral-100 p-8 shadow-lg'> 
          <h3 className='text-2xl font-semibold text-neutral-100 leading-6 pb-6'>Mais Informações:</h3>
          <div className='-mx-6 rounded-lg bg-black p-6'>
            <ul className='space-y-4 flex-1'>
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
