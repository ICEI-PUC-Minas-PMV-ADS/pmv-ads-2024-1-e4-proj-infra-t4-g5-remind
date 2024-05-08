// AgencyInput.jsx

import PropTypes from 'prop-types';

function AgencyInput({ value, onChange }) {
  return (
    <div className='buynow-input-text w-4/12'>
      <label htmlFor="agency" className='buynow-card-text-xs pl-1'>Agência</label>
      <input 
        type="text" 
        id="agency" 
        name="agency"  
        required 
        value={value} 
        onChange={onChange} 
        maxLength="4"
        className='w-full'
      />
    </div>
  );
}

AgencyInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default AgencyInput;
