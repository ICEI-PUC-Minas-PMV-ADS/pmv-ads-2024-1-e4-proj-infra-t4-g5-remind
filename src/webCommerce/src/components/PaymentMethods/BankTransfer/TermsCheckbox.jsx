// TermsCheckbox.jsx

import PropTypes from 'prop-types';

function TermsCheckbox({ checked, onChange }) {
  return (
    <div className="checkbox-container pt-2">
      <input 
        type="checkbox" 
        id="terms" 
        name="terms" 
        className='ml-2' 
        required 
        checked={checked}
        onChange={onChange} 
      />
      <label htmlFor="terms" className="checkbox-text-agree mt-3 ml-2">
        Eu autorizo o débito direto em conta corrente.
      </label>
    </div>
  );
}

TermsCheckbox.propTypes = {
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TermsCheckbox;
