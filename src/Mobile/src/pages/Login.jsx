// LoginScreen.js

import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { login } from '../services/userServices'; // Importe a função de login
import useUser from '../context/UserContextHook'; // Importe o contexto do usuário
import Input from '../components/Input'; // Importe o componente Input


const LoginScreen = () => {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false); // Estado para controlar a mensagem de sucesso

  const handleSubmit = async () => {
    const values = { email: usuario, password: senha };
    const errors = {};


    // Validação dos campos
    if (!values.email || !values.password) {
      errors.general = 'Preencha todos os campos.';
      console.log(errors.general);
    } else if (values.email.length < 3) {
      errors.email = 'O email deve ter no mínimo 3 caracteres.';
      console.log(errors.email);
    } else if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(values.email)) {
      errors.email = 'O email deve ser válido.';
      console.log(errors.email);
    } else if (values.password.length < 4) {
      errors.password = 'A senha deve ter no mínimo 4 caracteres.';
      console.log(errors.password);
    }

    if (Object.keys(errors).length > 0) {
      setError(errors);
      setLoading(false);
      return;
    }

    try {
      await login(values);
      setLoading(false);
      setSigned(true);
      console.log('Login efetuado com sucesso!');
      return;
    } catch (err) {
      if (err?.response?.status === 404) { // Correção aqui
        errors.general = 'Usuário ou senha inválidos.';
        console.log ('Usuário ou senha inválidos.');
        setError(errors);
        setLoading(false);
        return;
      } else if (err?.response?.status === 400) { // Correção aqui
        errors.general = 'Usuário não encontrado.';
        console.log ('Usuário não encontrado.');
        setError(errors);
        setLoading(false);
        return;
      } else {
        errors.general = 'Algo deu errado, tente novamente.';
        console.log (errors.general);
        setError(errors);
        setLoading(false);
        return;
      }
    }
  }

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

export default LoginScreen;