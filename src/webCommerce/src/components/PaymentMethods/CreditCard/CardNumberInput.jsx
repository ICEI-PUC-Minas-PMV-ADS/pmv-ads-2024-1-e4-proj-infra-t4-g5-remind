// CardNumberInput.jsx

import PropTypes from 'prop-types';
import { applyCreditCardFormat } from '../../../utils/inputMasks';

function CardNumberInput({ value, onChange }) {
  const handleChange = (event) => {
    const formattedValue = applyCreditCardFormat(event.target.value);
    onChange(formattedValue);
  };

  return (
    <div className='buynow-input-text mr-2'>
      <label htmlFor="cardNumber" className='buynow-card-text-sm'>Número do Cartão</label>
      <input 
        type="text" 
        id="cardNumber" 
        name="cardNumber" 
        required 
        value={value} 
        onChange={handleChange} 
        maxLength="19"
        className='w-full'
      />
    </div>
  );
}

CardNumberInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default CardNumberInput;
