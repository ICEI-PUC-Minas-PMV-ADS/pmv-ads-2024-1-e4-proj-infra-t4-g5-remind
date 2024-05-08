// AccountDigitInput.jsx

import PropTypes from 'prop-types';
import { applyAccountDigitFormat } from '../../../utils/inputMasks';

function AccountDigitInput({ value, onChange }) {

  const handleChange = (event) => {
    const formattedValue = applyAccountDigitFormat(event.target.value);
    onChange(formattedValue);
  };

  return (
    <div className='buynow-input-text w-2/12 mr-2'>
      <label htmlFor="accountDigit" className='buynow-card-text-xs'>Dígito</label>
      <input 
        type="text" 
        id="accountDigit" 
        name="accountDigit" 
        required 
        value={value} 
        onChange={handleChange} 
        maxLength="2"
        className='w-full'
      />
    </div>
  );
}

AccountDigitInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default AccountDigitInput;
