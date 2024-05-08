// NameInput.jsx

import PropTypes from 'prop-types';

function NameInput({ value, onChange }) {
  const handleNameInputChange = (event) => {
    let { value: inputValue } = event.target;
    // Remove números e caracteres especiais
    inputValue = inputValue.replace(/[^a-zA-Z\s]/g, '');
    // Garante que a primeira letra de cada palavra seja maiúscula
    inputValue = inputValue.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
    // Garante que preposições como 'da', 'das', 'de', 'des', 'di', 'do', 'dos', 'du' fiquem em minúsculas
    inputValue = inputValue.replace(/\b(da|das|de|des|di|do|dos|du)\b/gi, preposition => preposition.toLowerCase());
    // Atualiza o estado do nome
    onChange(inputValue);
  };

  return (
    <div className='buynow-input-text'>
      <input 
        type="text" 
        id="name" 
        name="name" 
        placeholder='Nome Completo' 
        required 
        value={value} 
        onChange={handleNameInputChange} 
        className='w-full placeholder-gray-500 text-sm p-1 font-thin'
      />
    </div>
  );
}

NameInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default NameInput;
