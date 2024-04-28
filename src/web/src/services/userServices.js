import axios from 'axios';

export const login = async (values) => {
  try {
    const res = await axios.post(
      `${import.meta.env.VITE_API_URL}/users/login`,
      {
        email: values.email,
        senha: values.password,
      },
    );

    localStorage.setItem('USER_TOKEN', res.data.token.toString());
    localStorage.setItem('USER_ID', res.data._id.toString());

    return res.data;
  } catch (error) {
    console.error('login error:', error);
  }
};

export const getUser = async (userId) => {
  try {
    const userInfo = await axios.get(
      `${import.meta.env.VITE_API_URL}/users/get/${userId}`,
      {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_ADMIN_TOKEN}`,
        },
      },
    );

    return userInfo.data;
  } catch (error) {
    console.error('getUser error:', error);
  }
};
