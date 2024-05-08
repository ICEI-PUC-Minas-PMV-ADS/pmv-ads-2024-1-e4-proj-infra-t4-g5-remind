// CVSInput.jsx

import PropTypes from 'prop-types';
import { applyCVSFormat } from '../../../utils/inputMasks';

function CVSInput({ value, onChange }) {

  const handleChange = (event) => {
    const formattedValue = applyCVSFormat(event.target.value);
    onChange(formattedValue);
  };

  return (
    <div className='buynow-input-text w-4/12 mr-2'>
      <label htmlFor="cvs" className='buynow-card-text-xs'>CVS</label>
      <input 
        type="text" 
        id="cvs" 
        name="cvs" 
        required 
        value={value} 
        onChange={handleChange} 
        maxLength="3"
        className='w-full'
      />
    </div>
  );
}

CVSInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default CVSInput;
