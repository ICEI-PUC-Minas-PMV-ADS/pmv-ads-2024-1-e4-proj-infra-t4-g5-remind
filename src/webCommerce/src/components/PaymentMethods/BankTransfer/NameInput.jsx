// NameInput.jsx

import PropTypes from 'prop-types';

function NameInput({ value, onChange }) {
  return (
    <div className='buynow-input-text'>
      <input 
        type="text" 
        id="name" 
        name="name" 
        placeholder='Nome Completo' 
        required 
        value={value} 
        onChange={onChange} 
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
