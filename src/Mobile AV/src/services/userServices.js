import axios from 'axios';
import { VITE_ADMIN_TOKEN, VITE_API_URL } from '@env';
import * as SecureStore from 'expo-secure-store';


export const login = async (values) => {
  try {
    const res = await axios.post(`${VITE_API_URL}/users/login`, {
      email: values.email,
      senha: values.password,
    });

    console.log(res.data);

    await SecureStore.setItemAsync('USER_TOKEN', res.data.token.toString());
    await SecureStore.setItemAsync('USER_ID', res.data._id.toString());

    console.log('USER_TOKEN armazenado:', await SecureStore.getItemAsync('USER_TOKEN'));
    console.log('USER_ID armazenado:', await SecureStore.getItemAsync('USER_ID'));

    return res.data;
  } catch (error) {
    console.error('Erro durante o login:', error);
    if (error.response) {
      throw new Error(error.response.data.message || 'Erro de autenticação');
    } else {
      throw new Error('Erro ao conectar com o servidor.');
    }
  }
};

export const getUser = async (userId) => {
  try {
    const userInfo = await axios.get(`${VITE_API_URL}/users/get/${userId}`, {
      headers: {
        Authorization: 'Bearer ' + (await SecureStore.getItemAsync('USER_TOKEN')),
      },
    });

    return userInfo.data;
  } catch (error) {
    console.error(
      'getUser error:',
      error?.response.status,
      error?.response.data,
    );
    throw error;
  }
}

export const getAllUsers = async () => {
  try {
    const userInfo = await axios.get(`${VITE_API_URL}/users/get`, {
      headers: {
        Authorization: `Bearer ${VITE_ADMIN_TOKEN}`,
      },
    });

    return userInfo.data;
  } catch (error) {
    console.error(
      'getAllUsers error:',
      error?.response.status,
      error?.response.data,
    );
    throw error;
  }
};
