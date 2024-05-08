// AccountDigitInput.jsx

import PropTypes from 'prop-types';

function AccountDigitInput({ value, onChange }) {
  return (
    <div className='buynow-input-text w-2/12 mr-2'>
      <label htmlFor="accountDigit" className='buynow-card-text-xs'>Dígito</label>
      <input 
        type="text" 
        id="accountDigit" 
        name="accountDigit" 
        required 
        value={value} 
        onChange={onChange} 
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
