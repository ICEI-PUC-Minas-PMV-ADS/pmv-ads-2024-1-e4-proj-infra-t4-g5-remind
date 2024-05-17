import PropTypes from 'prop-types';

function CreditCardField({ value }) {
  return (
    <div>
      <input 
        type="text" 
        id="creditCard" 
        name="creditCard" 
        value={value} 
        readOnly 
        className='text-slate-300 text-3xl border-transparent px-4 pb-8 bg-transparent font-semibold italic text-center w-full'
      />
    </div>
  );
}

CreditCardField.propTypes = {
  value: PropTypes.string,
};

export default CreditCardField;
