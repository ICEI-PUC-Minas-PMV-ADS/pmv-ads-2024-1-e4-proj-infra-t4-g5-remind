import axios from 'axios';

export const getNote = async (noteId) => {
  try {
    const res = await axios.get(
      `${import.meta.env.VITE_API_URL}/notes/get/${noteId}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('USER_TOKEN')}`,
        },
      },
    );

    return res.data;
  } catch (error) {
    console.error(
      'getNote error:',
      error?.response.status,
      error?.response.data,
    );
    throw error;
  }
};

export const getUserNotesCreator = async () => {
  try {
    const res = await axios.get(
      `${import.meta.env.VITE_API_URL}/notes/get/criador`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('USER_TOKEN')}`,
        },
      },
    );

    return res.data;
  } catch (error) {
    console.error(
      'getUserNotesCreator error:',
      error?.response.status,
      error?.response.data,
    );
    throw error;
  }
};

export const getUserNotesAssigned = async () => {
  try {
    const res = await axios.get(
      `${import.meta.env.VITE_API_URL}/notes/get/destinatario`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('USER_TOKEN')}`,
        },
      },
    );

    return res.data;
  } catch (error) {
    console.error(
      'getUserNotesAssigned error:',
      error?.response.status,
      error?.response.data,
    );
    throw error;
  }
};
