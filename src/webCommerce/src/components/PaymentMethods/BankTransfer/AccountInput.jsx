// AccountInput.jsx

import PropTypes from 'prop-types';

function AccountInput({ value, onChange }) {
  const handleChange = (event) => {
    const { value } = event.target;
    const formattedValue = applyAccountFormat(value);
    onChange(formattedValue);
  };

  const applyAccountFormat = (value) => {
    // Remove todos os caracteres não numéricos
    const onlyNumbers = value.replace(/[^\d]/g, '');
    // Adiciona ponto a cada 3 dígitos
    const formattedValue = onlyNumbers.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    return formattedValue;
  };

  return (
    <div className='buynow-input-text w-4/7 mr-2'>
      <label htmlFor="account" className='buynow-card-text-sm'>Número da Conta</label>
      <input 
        type="text" 
        id="account" 
        name="account" 
        required 
        value={value} 
        onChange={handleChange} 
        className='w-full'
      />
    </div>
  );
}

AccountInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default AccountInput;
