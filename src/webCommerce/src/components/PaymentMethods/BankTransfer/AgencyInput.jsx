import PropTypes from 'prop-types';
import { applyAgencyFormat } from '../../../utils/inputMasks';

function AgencyInput({ value, onChange }) {

  const handleInputChange = (event) => {
    let inputValue = event.target.value;
    inputValue = inputValue.replace(/[^\d]/g, '');
    onChange(inputValue);
  };

  const handleBlur = (event) => {
    const formattedValue = applyAgencyFormat(event.target.value);
    onChange(formattedValue);
  };

  return (
    <div className='buynow-input-text w-4/12'>
      <label htmlFor="agency" className='buynow-card-text-xs pl-1'>Agência</label>
      <input 
        type="text" 
        id="agency" 
        name="agency"  
        required 
        value={value} 
        onChange={handleInputChange} 
        onBlur={handleBlur}
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
