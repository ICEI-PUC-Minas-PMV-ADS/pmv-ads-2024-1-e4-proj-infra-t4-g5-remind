import axios from 'axios';

export const createNote = async (values) => {
  try {
    const res = await axios.post(
      `${import.meta.env.VITE_API_URL}/notes/criar/`,
      {
        ...values,
        situacao: 'pendente',
        // Ajustando a data para o formato UTC (fuso horário 0)
        // Necessário o getTimezoneOffset aqui, pois, new Date() retorna a data no fuso horário do usuário
        datainicial: new Date(
          new Date().getTime() - new Date().getTimezoneOffset(),
        ),
        // Ajustando data final para o formato UTC (fuso horário 0)
        // Aqui o input retorna a data absoluta, sem fusos horários, tirando a necessidade do getTimezoneOffset
        datafinal: new Date(new Date(values.datafinal).getTime()),
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('USER_TOKEN')}`,
        },
      },
    );

    return res.data;
  } catch (error) {
    console.error(
      'createNote error:',
      error?.response.status,
      error?.response.data,
    );
    throw error;
  }
};

export const completeNote = async (noteId) => {
  try {
    const res = await axios.put(
      `${import.meta.env.VITE_API_URL}/notes/update/${noteId}`,
      {
        situacao: 'concluido',
        dataconclusao: new Date(
          new Date().getTime() - new Date().getTimezoneOffset(),
        ),
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('USER_TOKEN')}`,
        },
      },
    );

    return res.data;
  } catch (error) {
    console.error(
      'completeNote error:',
      error?.response.status,
      error?.response.data,
    );
    throw error;
  }
};

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
