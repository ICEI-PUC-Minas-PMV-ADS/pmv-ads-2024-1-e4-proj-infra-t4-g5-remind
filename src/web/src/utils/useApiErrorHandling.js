import { useState } from 'react';

function useApiErrorHandling() {
  const [error, setError] = useState(null);

  const handleError = (erro) => {
    if (erro.response) {
      console.error('Erro na requisição:', erro.response.data);
      setError('Erro:' + erro.response.data.message);
    } else {
      console.error('Erro na requisição:', erro.message);
      setError('Erro:' + erro.message);
    }
  };
  return { error, handleError };
}

export default useApiErrorHandling;
