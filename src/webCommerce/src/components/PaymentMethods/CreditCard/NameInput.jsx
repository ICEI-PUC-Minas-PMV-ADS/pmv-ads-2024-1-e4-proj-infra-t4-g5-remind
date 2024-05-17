// NameInput.jsx

import PropTypes from 'prop-types';

function NameInput({ value, onChange }) {
  const handleNameInputChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <div className='buynow-input-text'>
      <input 
        type="text" 
        id="name" 
        name="name" 
        placeholder='Nome como apresentado no cartão' 
        required 
        value={value} 
        onChange={handleNameInputChange} 
        className='w-full placeholder-gray-500 text-sm p-1 font-thin'
      />
    </div>
  );
}

NameInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default NameInput;
