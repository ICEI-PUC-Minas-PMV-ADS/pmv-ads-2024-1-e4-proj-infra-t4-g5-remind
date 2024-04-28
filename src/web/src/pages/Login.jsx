import { useState } from 'react';
import Input from '../components/Input';
import Title from '../components/Title';
import Logo from '../assets/images/logo.png';
import axios from 'axios';

export default function Login() {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    const formData = new FormData(e.target);
    const values = Object.fromEntries(formData);
    const errors = {};

    setLoading(true);

    if (!values.email && !values.password) {
      errors.general = 'Preencha todos os campos.';
    } else if (values.email.length < 3) {
      errors.email = 'O email deve ter no mínimo 3 caracteres.';
    } else if (
      !/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(values.email)
    ) {
      errors.email = 'O email deve ser válido.';
    } else if (values.password.length < 4) {
      errors.password = 'A senha deve ter no mínimo 4 caracteres.';
    }

    if (Object.keys(errors).length > 0) {
      setError(errors);
      setLoading(false);
      return;
    }

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/users/login`,
        { email: values.email, senha: values.password },
      );

      console.log(res);
      setLoading(false);
      return;
    } catch (err) {
      if (err.response.status == 404) {
        errors.general = 'Usuário ou senha inválidos.';
        console.error(err.response.data);
        setError(errors);
        setLoading(false);
        return;
      } else if (err.response.status == 400) {
        errors.general = 'Usuário não encontrado.';
        console.error(err.response.data);
        setError(errors);
        setLoading(false);
        return;
      } else {
        errors.general = 'Algo deu errado, tente novamente.';
        console.error(err.response.data);
        console.error(err);
        setError(errors);
        setLoading(false);
        return;
      }
    }
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
              disabled={loading}
            />
            <small className="text-red-500 text-md">{error.email}</small>
          </div>

          <div className="flex flex-col">
            <p className="font-semibold">Senha</p>
            <Input
              error={error.password || error.general}
              type="password"
              name="password"
              disabled={loading}
            />
            <small className="text-red-500 text-md">{error.password}</small>
          </div>

          <button
            disabled={loading}
            className="bg-[#317BE9] text-white font-semibold w-52 h-12 hover:scale-110 hover:rounded-md mt-6 disabled:bg-slate-400 disabled:hover:scale-100 disabled:rounded-md lg:w-72"
          >
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
