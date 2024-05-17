import PropTypes from 'prop-types';
import { applyAccountFormat } from '../../../utils/inputMasks';

function AccountInput({ value, onChange }) {
  const handleChange = (event) => {
    const formattedValue = applyAccountFormat(event.target.value);
    onChange(formattedValue);
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
