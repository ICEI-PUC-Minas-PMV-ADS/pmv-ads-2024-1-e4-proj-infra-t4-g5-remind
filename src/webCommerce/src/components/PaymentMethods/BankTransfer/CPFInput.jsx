// CPFInput.jsx

import PropTypes from 'prop-types';

function CPFInput({ value, onChange }) {

  const handleCPFInputChange = (event) => {
    
    const { value: inputValue } = event.target;

    const onlyNumbers = inputValue.replace(/[^\d]/g, '');

    const maskedCPF = onlyNumbers
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{2})$/, '$1-$2');

    onChange(maskedCPF);
  };

  return (
    <div className='buynow-input-text'>
      <label htmlFor="cpf" className='buynow-card-text-sm'>CPF</label>
      <input 
        type="text" 
        id="cpf" 
        name="cpf" 
        placeholder='CPF' 
        value={value}
        onChange={handleCPFInputChange} 
        maxLength="14" // Limita o tamanho máximo do input
        className='w-full placeholder-gray-500 text-sm p-1 font-thin'
      />
    </div>
  );
}

CPFInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default CPFInput;
