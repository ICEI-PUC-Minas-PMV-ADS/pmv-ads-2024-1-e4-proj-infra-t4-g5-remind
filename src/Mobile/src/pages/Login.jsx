import { useState } from 'react';
import { StyleSheet, View, Button, } from 'react-native';
import Input from '../components/Input';
import Title from '../components/Title';
import Logo from '../assets/images/logo.png';
import { login } from '../services/userServices';
import { useNavigation } from '@react-navigation/native';
import useUser from '../context/UserContextHook';

export default function Login() {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { setSigned } = useUser();
  const navigation = useNavigation();

  async function handleSubmit(email, password) {
    const values = { email, password };
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
      await login(values);

      setLoading(false);
      setSigned(true);
      navigation.navigate('Home');
      return;
    } catch (err) {
      if (err?.response.status == 404) {
        errors.general = 'Usuário ou senha inválidos.';
        setError(errors);
        setLoading(false);
        return;
      } else if (err?.response.status == 400) {
        errors.general = 'Usuário não encontrado.';
        setError(errors);
        setLoading(false);
        return;
      } else {
        errors.general = 'Algo deu errado, tente novamente.';
        setError(errors);
        setLoading(false);
        return;
      }
    }
  }

  return (
    <View style={styles.container}>
      <Title>Login</Title>
      <Input
        style={styles.input}
        placeholder="Usuário"
        onChangeText={(text) => setEmail(text)}
      />
      <Input
        style={styles.input}
        placeholder="Senha"
        secureTextEntry={true}
        onChangeText={(text) => setPassword(text)}
      />
      <Button
        title="Continuar"
        onPress={handleSubmit}
        disabled={loading}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '80%',
    marginBottom: 10,
    padding: 10,
  },
});r