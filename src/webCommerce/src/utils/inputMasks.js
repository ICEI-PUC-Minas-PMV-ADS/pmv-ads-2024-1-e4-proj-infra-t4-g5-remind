// utils/inputMasks.js
export const applyCPFFormat = (value) => {
    const onlyNumbers = value.replace(/[^\d]/g, '');
    const maskedCPF = onlyNumbers
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    return maskedCPF;
  };
  
  // inputMasks.js
export const applyAccountFormat = (value) => {
  // Remove todos os caracteres não numéricos
  const onlyNumbers = value.replace(/[^\d]/g, '');
  // Aplicar a máscara de milhares
  const formattedAccount = onlyNumbers.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  return formattedAccount;
};

  
  export const applyAgencyFormat = (value) => {
    const paddedValue = value.padStart(4, '0').slice(0, 4);
    return paddedValue;
  };
  