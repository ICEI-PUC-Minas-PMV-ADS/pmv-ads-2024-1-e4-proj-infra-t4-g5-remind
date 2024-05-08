// utils/inputMasks.js
export const applyCPFFormat = (value) => {
    const onlyNumbers = value.replace(/[^\d]/g, '');
    const maskedCPF = onlyNumbers
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    return maskedCPF;
  };
  
  export const applyAccountFormat = (value) => {
    const onlyNumbers = value.replace(/[^\d]/g, '');
    const formattedAccount = onlyNumbers.replace(/(\d{1,3})(?=(\d{3})+(?!\d))/g, '$1.');
    return formattedAccount;
  };
  
  export const applyAgencyFormat = (value) => {
    const paddedValue = value.padStart(4, '0').slice(0, 4);
    return paddedValue;
  };
  