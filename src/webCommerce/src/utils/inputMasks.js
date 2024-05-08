// utils/inputMasks.js

export const applyCPFFormat = (value) => {
  const onlyNumbers = value.replace(/[^\d]/g, '');
  const maskedCPF = onlyNumbers
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{2})$/, '$1-$2');
  return maskedCPF;
};

export const applyAccountFormat = (value) => {
  const onlyNumbers = value.replace(/[^\d]/g, '');
  const formattedAccount = onlyNumbers.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  return formattedAccount;
};

export const applyAgencyFormat = (value) => {
  const paddedValue = value.padStart(4, '0').slice(0, 4);
  return paddedValue;
};

export const applyNameFormat = (value) => {
  let formattedName = value.replace(/[^a-zA-Z\s]/g, '');
  formattedName = formattedName.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
  formattedName = formattedName.replace(/\b(da|das|de|des|di|do|dos|du)\b/gi, preposition => preposition.toLowerCase());
  return formattedName;
};

export const applyAccountDigitFormat = (value) => {
  return value.slice(0, 2);
};
