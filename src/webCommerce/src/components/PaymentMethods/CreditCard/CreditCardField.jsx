// CreditCardField.jsx

import PropTypes from 'prop-types';
import { creditCards } from '../../../constants/index';

function CreditCardField({ value, onChange }) {
  return (
    <div>
      <label htmlFor="creditCard" className='buynow-card-text-sm'>Cartão de Crédito</label>
      <select 
        id="creditCard" 
        name="creditCard" 
        required 
        value={value} 
        onChange={onChange} 
        className='text-gray-500 text-sm p-1.5 font-thin w-full'
      >
        <option value="">Selecione um cartão</option>
        {creditCards.map((card, index) => (
          <option key={index} value={card}>{card}</option>
        ))}
      </select>
    </div>
  );
}

CreditCardField.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default CreditCardField;
