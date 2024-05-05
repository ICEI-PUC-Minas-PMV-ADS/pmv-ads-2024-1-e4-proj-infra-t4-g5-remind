import { useState } from 'react';

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className='relative flex flex-col rounded-2xl border border-purple-500 bg-zinc text-neutral-100 p-8 shadow-lg'>
      <form>
        <div>
          <label htmlFor="userName">Nome</label>
          <input type="text" id="userName" name="userName" required />
        </div>
        <div>
          <label htmlFor="email">E-mail</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div>
          <label htmlFor="password">Senha</label>
          <input type={showPassword ? "text" : "password"} id="password" name="password" required />
          <button type="button" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? 'Esconder' : 'Mostrar'}
          </button>
        </div>
        <div>
          <input type="checkbox" id="terms" name="terms" required />
          <label htmlFor="terms">Li e aceito e concordo com os Termos e Condições</label>
        </div>
        <a href='#'
          className='mt-8 block rounded-lg  px-6 py-4 text-center text-sm font-semibold leading-4 btn-buynow'
        >
          Continuar e Pagar
        </a>
      </form>
    </div>
  );
};

export default Register;
