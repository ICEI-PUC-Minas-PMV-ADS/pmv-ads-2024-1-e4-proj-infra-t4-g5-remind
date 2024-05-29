

import PropTypes from 'prop-types';
import { applyNameFormat } from '../../../utils/inputMasks';

function NameInput({ value, onChange }) {
  const handleNameInputChange = (event) => {
    const formattedValue = applyNameFormat(event.target.value);
    onChange(formattedValue);
  };

  return (
    <div className='buynow-input-text'>
      <input 
        type="text" 
        id="name" 
        name="name" 
        placeholder='Nome Completo' 
        required 
        value={value} 
        onChange={handleNameInputChange} 
        className='w-full placeholder-gray-500 text-sm p-1 font-thin'
      />
    </div>
  );
}

NameInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default NameInput;
