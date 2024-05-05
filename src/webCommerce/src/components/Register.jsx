import { useState } from 'react';
import PropTypes from 'prop-types';

const Register = ({ onButtonClick }) => {
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
    <div className='relative flex flex-col items-center justify-center bg-zinc text-neutral-100 p-8 shadow-lg'>
      <div className='mx-auto grid max-w-7xl grid-cols-3 gap-8 py-12 px-4 sm:px-6 lg:px-8'>
        <div className='relative flex flex-col items-center justify-center rounded-2xl bg-zinc text-neutral-100 p-8 shadow-lg'>

        </div>
      <form className='relative flex flex-col items-center justify-center rounded-2xl border border-purple-500 bg-zinc text-neutral-100 p-8 shadow-lg'>
      <div className='text-neutral-100 text-2xl pb-4'>
        <h2>Registre-se</h2>
      </div>
        <div className=' pb-4'>
          <label htmlFor="userName" className='text-sm'>Nome</label>
          <input className='w-full' type="text" id="userName" name="userName" required onChange={(e) => setUserName(e.target.value)} />
        </div>
        <div className=' pb-4'>
          <label htmlFor="email" className='text-sm'>E-mail</label>
          <input className='w-full' type="email" id="email" name="email" required onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className='pb-4'>
          <label htmlFor="password" className='text-sm'>Senha</label>
          <input className='w-full' type={showPassword ? "text" : "password"} id="password" name="password" required onChange={(e) => setPassword(e.target.value)} />
          <div className="flex justify-end mt-2">
          <button className='flex justify-end text-xs text-purple-400 pb-4' type="button" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? 'Esconder' : 'Mostrar'}
          </button>
          </div>
        </div>
        <div className=" flex-1 flex max-w-7xl -ml-2">
          <input type="checkbox" id="terms" name="terms" className='mx-2' required onChange={(e) => setTermsAccepted(e.target.checked)} />
          <label htmlFor="terms" className="font-semibold text-xs underline text-purple-400">
                    Li e aceito e concordo com os Termos e Condições 
            </label>
        </div>
        <button href='#'
          onClick={handleButtonClick}
          className='mt-8 block rounded-lg  px-6 py-4 text-center text-sm font-semibold leading-4 btn-buynow'
        >
          Continuar e Pagar
        </button>
      </form>
      <div className='relative flex flex-col items-center justify-center rounded-2xl bg-zinc text-neutral-100 p-8 shadow-lg'>

        </div>
      </div>
    </div>
  );
};

Register.propTypes = {
    onButtonClick: PropTypes.func.isRequired,
  };

export default Register;
