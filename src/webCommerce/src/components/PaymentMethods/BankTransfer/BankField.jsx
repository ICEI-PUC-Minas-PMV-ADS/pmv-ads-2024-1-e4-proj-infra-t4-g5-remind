// BankField.jsx
import { Banks } from '../../../constants';
import PropTypes from 'prop-types';

function BankField({ value, onChange }) {
  return (
    <div>
      <label htmlFor="bank" className='buynow-card-text-sm'>Banco</label>
      <select 
        id="bank" 
        name="bank" 
        required 
        value={value} 
        onChange={onChange} 
        className='text-gray-500 text-sm p-1.5 font-thin w-full'
      >
        <option value="">Selecione um banco</option>
        {Banks.map((bank, index) => (
          <option key={index} value={bank}>{bank}</option>
        ))}
      </select>
    </div>
  );
}

BankField.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default BankField;
