import axios from 'axios';
import { VITE_ADMIN_TOKEN, VITE_API_URL } from '@env';

export const login = async (email, password) => {
  try {
    const res = await axios.post(`${VITE_API_URL}/users/login`, {
      email,
      password,
    });

    console.log(res.data);

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
        Authorization: `Bearer ${VITE_ADMIN_TOKEN}`,
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
