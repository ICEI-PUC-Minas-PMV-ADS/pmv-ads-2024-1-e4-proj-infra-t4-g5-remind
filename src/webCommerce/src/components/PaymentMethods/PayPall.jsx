
//PayPall.jsx
import { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { PurchaseContext } from '../../context/PurchaseContext';
/* import PaymentInvoice from '../PaymentInvoices/PaymentInvoice'; */


function PayPall({ onButtonClick, selectedPlan }) {

  const [showPassword, setShowPassword] = useState(false);
  const [payPallEmail, setPayPallEmail] = useState('');
  const [payPallPassword, setPayPallPassword] = useState('');
  const [payPallTermsAccepted, setPayPallTermsAccepted] = useState(false);
 /*  const [payPallPaymentInfo , setPayPallPaymentInfo ] = useState(null); */
  const { purchaseData, setPurchaseData } = useContext(PurchaseContext);


  const handleButtonClick = (event) => {
    event.preventDefault();

    // Cria uma cópia de purchaseData
    let tempPurchaseData = { ...purchaseData };

    // Adiciona as informações de pagamento à cópia
    tempPurchaseData = {
      ...tempPurchaseData,
      paymentMethod: "PayPall",
      payPallEmail: payPallEmail,
      payPallPassword: payPallPassword ,
      payPallTermsAccepted: payPallTermsAccepted
    };

    if (tempPurchaseData.userName && tempPurchaseData.email && tempPurchaseData.password && tempPurchaseData.termsAccepted && tempPurchaseData.payPallEmail && tempPurchaseData.payPallPassword && tempPurchaseData.payPallTermsAccepted) {
      console.log('Temp Purchased Data:' ,tempPurchaseData);
      setPurchaseData(tempPurchaseData);
      onButtonClick(tempPurchaseData, selectedPlan);
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
              Faça login em sua conta da PayPall para realizar o pagamento.
            </p>
          </div>
        </div>
        <div>
          <div className='buynow-input-text'>
            <label htmlFor="email" className='buynow-card-text-sm'>E-mail</label>
            <input className='w-full' type="email" id="email" name="email" required 
            onChange={(e) => setPayPallEmail(e.target.value)} />
          </div>
          <div className='buynow-input-text'>
            <label htmlFor="password" className='buynow-card-text-sm'>Senha</label>
            <input className='w-full' type={showPassword ? "text" : "password"} id="password" name="password" required 
            onChange={(e) => setPayPallPassword(e.target.value)} />
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
          onChange={(e) => setPayPallTermsAccepted(e.target.checked)} />
          <label htmlFor="terms" className="buynow-card-text-sm">
            Pagar com a conta PayPall.
          </label>
        </div>

      </form>
  
        <div className="flex justify-center mt-12">
            <button
              onClick={handleButtonClick}
              className={`btn-buynow-popular w-11/12}`}
            >
              Pagar
            </button>

        </div>
      </div>
    );
}

PayPall.propTypes = {
  onButtonClick: PropTypes.func.isRequired,
  selectedPlan: PropTypes.object.isRequired,
  payPallEmail: PropTypes.string,
  payPallPassword: PropTypes.string,
  payPallTermsAccepted: PropTypes.bool
};

export default PayPall