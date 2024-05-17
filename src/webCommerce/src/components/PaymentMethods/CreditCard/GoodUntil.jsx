// GoodUntil.jsx

import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function GoodUntil({ value, onChange }) {
  const handleChange = (date) => {
    onChange(date);
  };

  /* console.log(value instanceof Date); */

  return (
    <div className='buynow-input-text w-4/12 mr-2'>
      <label htmlFor="goodUntil" className='buynow-card-text-sm'>Validade</label>
      <div className="input-with-icon">
        <DatePicker 
          selected={value} 
          onChange={handleChange} 
          dateFormat="MM/yyyy"
          showMonthYearPicker
          className='w-full text-gray-500 font-thin text-center'
        />
      </div>
    </div>
  );
}

GoodUntil.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.instanceOf(Date),
    PropTypes.string // Permitir tanto instância de Date quanto string
  ]),
  onChange: PropTypes.func.isRequired
};

export default GoodUntil;
