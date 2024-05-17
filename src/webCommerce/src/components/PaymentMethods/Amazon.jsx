import { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { PaymentContext } from '../../context/PaymentContext';

function Amazon({ onButtonClick, selectedPlan }) {
  const [showPassword, setShowPassword] = useState(false);
  const { amazonPaymentInfo, setAmazonPaymentInfo } = useContext(PaymentContext);

  const handleButtonClick = (event) => {
    event.preventDefault();
    if (amazonPaymentInfo.amazonEmail && amazonPaymentInfo.amazonPassword && amazonPaymentInfo.amazonTermsAccepted) {
      onButtonClick(amazonPaymentInfo, selectedPlan);
    } else {
      alert('Por favor, preencha todos os campos e aceite os termos e condições.');
    }
  };

  return (
      <div>
        <form className='relative -mx-4 flex flex-col p-4'>
        <div className='pb-6 flex flex-col items-center justify-center'>
          <div>
            <p className='buynow-card-text-sm'>
              Faça login em sua conta da Amazon Prime para realizar o pagamento.
            </p>
          </div>
        </div>
        <div>
          <div className='buynow-input-text'>
            <label htmlFor="email" className='buynow-card-text-sm'>E-mail</label>
            <input className='w-full' type="email" id="email" name="email" required 
            onChange={(e) => setAmazonPaymentInfo(prevInfo => ({ ...prevInfo, amazonEmail: e.target.value }))} />
          </div>
          <div className='buynow-input-text'>
            <label htmlFor="password" className='buynow-card-text-sm'>Senha</label>
            <input className='w-full' type={showPassword ? "text" : "password"} id="password" name="password" required 
            onChange={(e) => setAmazonPaymentInfo(prevInfo => ({ ...prevInfo, amazonPassword: e.target.value }))} />
            <div className="flex justify-end mt-2">
              <button className='flex justify-end text-xs text-purple-400 pb-4' type="button" 
              onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? 'Esconder' : 'Mostrar'}
              </button>
            </div>
          </div>
        </div>
        <div className="checkbox-container">
          <input type="checkbox" id="terms" name="terms" className='mx-2 ' required 
          onChange={(e) => setAmazonPaymentInfo(prevInfo => ({ ...prevInfo, amazonTermsAccepted: e.target.value }))} />
          <label htmlFor="terms" className="buynow-card-text-sm">
            Pagar com a conta Amazon.
          </label>
        </div>
      </form>
        <div className="flex justify-center mt-12">
            <button
              onClick={handleButtonClick}
              className={`btn-buynow-popular w-11/12`}
            >
              Pagar
            </button>
        </div>
      </div>
    );
}

Amazon.propTypes = {
  onButtonClick: PropTypes.func.isRequired,
  selectedPlan: PropTypes.object.isRequired,
  amazonEmail: PropTypes.string,
  amazonPassword: PropTypes.string,
  amazonTermsAccepted: PropTypes.bool,
};

export default Amazon