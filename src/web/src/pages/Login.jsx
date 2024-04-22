import { useState } from 'react';
import Input from '../components/Input';
import Title from '../components/Title';
import Logo from '../assets/images/logo.png';

export default function Login() {
  const [error, setError] = useState('');

  function handleSubmit(e) {
    var formData = new FormData(e.target);
    let values = Object.fromEntries(formData);
    let erros = {};

    if (!values.email && !values.password) {
      erros.general = 'Preencha todos os campos.';
    } else if (values.email.length < 3) {
      erros.email = 'O email deve ter no mínimo 3 caracteres.';
    } else if (
      !values.email
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        )
    ) {
      erros.email = 'O email deve ser válido.';
    } else if (values.password.length < 6) {
      erros.password = 'A senha deve ter no mínimo 6 caracteres.';
    }

    setError(erros);
    console.log(values);
  }

  return (
    <div className="dflex h-[100vh]">
      <div className="dflex flex-col gap-12 w-[500px] h-[500px]">
        <div>
          <img src={Logo} alt="" />

          <Title>Login</Title>
        </div>
        <form
          className="flex-col gap-6 dflex"
          noValidate
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(e);
          }}
        >
          <h1 className="text-lg text-red-500">{error.general}</h1>

          <div className="flex flex-col">
            <p className="font-semibold">Usuário</p>
            <Input
              error={error.email || error.general}
              min={3}
              type="email"
              name="email"
            />
            <small className="text-red-500 text-md">{error.email}</small>
          </div>

          <div className="flex flex-col">
            <p className="font-semibold">Senha</p>
            <Input
              error={error.password || error.general}
              type="password"
              name="password"
            />
            <small className="text-red-500 text-md">{error.password}</small>
          </div>

          <button className="bg-[#317BE9] text-white font-semibold w-52 h-12 hover:scale-110 hover:rounded-md mt-6 lg:w-72">
            Continuar
          </button>

          <small className="mt-[-15px] w-52 text-xs font-medium text-center  text-gray-500 tracking-wide opacity-[85%] md:text-left lg:w-72">
            Caso não consiga se conectar entre em contato com seu administrador
          </small>
        </form>
      </div>

      <section>
        <div className="wave1"></div>
        <div className="wave2"></div>
      </section>
    </div>
  );
}
