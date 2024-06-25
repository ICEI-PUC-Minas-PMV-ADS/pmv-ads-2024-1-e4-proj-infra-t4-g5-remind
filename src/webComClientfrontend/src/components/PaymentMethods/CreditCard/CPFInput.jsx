import PropTypes from 'prop-types';
import { applyCPFFormat } from '../../../utils/inputMasks';

function CPFInput({ value, onChange }) {

  const handleCPFInputChange = (event) => {
    const formattedValue = applyCPFFormat(event.target.value);
    onChange(formattedValue);
  };

  return (
    <div className='buynow-input-text w-/12'>
      <label htmlFor="cpf" className='buynow-card-text-sm'>CPF</label>
      <input 
        type="text" 
        id="cpf" 
        name="cpf" 
        placeholder='CPF' 
        value={value}
        onChange={handleCPFInputChange} 
        maxLength="14"
        className='w-full text-gray-500 font-thin text-center'
      />
    </div>
  );
}

CPFInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default CPFInput;
