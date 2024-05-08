// CPFInput.jsx

import PropTypes from 'prop-types';

function CPFInput({ value, onChange }) {
  return (
    <div className='buynow-input-text'>
      <input 
        type="text" 
        id="cpf" 
        name="cpf" 
        placeholder='CPF' 
        value={value}
        onChange={onChange} 
        maxLength="14" 
        className='w-full placeholder-gray-500 text-sm p-1 font-thin'
      />
    </div>
  );
}

CPFInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default CPFInput;
