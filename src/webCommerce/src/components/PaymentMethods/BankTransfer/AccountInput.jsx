// AccountInput.jsx
import PropTypes from 'prop-types';

function AccountInput({ value, onChange }) {
  return (
    <div className='buynow-input-text mr-2'>
      <label htmlFor="account" className='buynow-card-text-sm'>Conta</label>
      <input 
        type="text" 
        id="account" 
        name="account" 
        required 
        value={value} 
        onChange={onChange} 
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
