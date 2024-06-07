import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { login } from '../services/userServices';
import { useUser } from '../context/UserContext.jsx';
import Input from '../components/Input';
import Logo from "../assets/images/logo.svg"
import { useNavigation } from '@react-navigation/native';


const Login = () => {
    const { setSigned } = useUser();
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState({});
    const navigation = useNavigation();

    const handleSubmit = async () => {
        const values = { email: usuario, password: senha };
        const errors = {};

        if (!values.email || !values.password) {
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
            setLoading(true);
            await login(values);
            setLoading(false);
            console.log('Login efetuado com sucesso!');
            setSigned(true);
            navigation.navigate('Home');
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
            <View style={styles.form}>
                <Logo />
                <Text style={styles.loginTitle}>Fazer Login</Text>
                {error.email && <Text>{error.email}</Text>}
                <Input
                    placeholder="Usuário"
                    value={usuario}
                    onChangeText={setUsuario}
                    style={styles.input}
                />
                {error.password && <Text>{error.password}</Text>}
                <Input
                    placeholder="Senha"
                    value={senha}
                    onChangeText={setSenha}
                    secureTextEntry
                    style={styles.input}
                />
                {error.general && <Text>{error.general}</Text>}
                <Button
                    disabled={!(senha && usuario)}
                    color="#317BE9"
                    onPress={handleSubmit}
                    title='Entrar'
                />
                <Text style={styles.subtext}>
                    Caso não consiga se conectar entre em contato com seu administrador
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FFF"
    },
    form: {
        gap: 10,
        width: "70%",
        minHeight: 100,
    },
    loginTitle: {
        fontSize: 48,
        fontWeight: "600",
    },
    input: {
        width: '100%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        padding: 10,
        marginBottom: 15,
    },
    loginButton: {
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 5,
        backgroundColor: "red"
    },
    subtext: {
        fontSize: 14,
        color: "#9C9C9C",
        textAlign: "left"
    }
});

export default Login;