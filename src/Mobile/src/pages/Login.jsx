import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { login } from '../services/userServices';
import { useUser } from '../context/UserContext.jsx';
import Input from '../components/Input';

const Login = () => {
  const { setSigned } = useUser();
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});
  const handleSubmit = async () => {
    const values = { email: usuario, password: senha };
    const errors = {};

    if (!values.email || !values.password) {
      errors.general = 'Preencha todos os campos.';
    } else if (values.email.length < 3) {
      errors.email = 'O email deve ter no mínimo 3 caracteres.';
    } else if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(values.email)) {
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
      setLoading(true);
      const data = await login(values);
      setLoading(false);
      setSigned(true);
      console.log('Login efetuado com sucesso!');
    } catch (error) {
      setLoading(false);
      console.error('Erro durante o login:', error);

      if (error.response) {
        switch (error.response.status) {
          case 401:
            errors.general = 'Credenciais inválidas.';
            break;
          case 500:
            errors.general = 'Erro no servidor. Tente novamente mais tarde.';
            break;
          default:
            errors.general = 'Algo deu errado. Tente novamente.';
        }
      } else if (error.request) {
        errors.general = 'Erro de conexão com o servidor.';
      } else {
        errors.general = 'Erro desconhecido.';
      }

      setError(errors);
    }
  };

  return (
    <View style={styles.container}>
      <Input
        placeholder="Usuário"
        value={usuario}
        onChangeText={setUsuario}
        style={styles.input}
      />
      <Input
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
        style={styles.input}
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    marginBottom: 15,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Login;