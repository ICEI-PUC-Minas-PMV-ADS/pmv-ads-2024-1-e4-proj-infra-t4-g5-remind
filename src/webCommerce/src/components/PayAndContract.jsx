// PayAndContract.jsx
import { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { PaymentContext } from '../context/PaymentContext';
import { PurchaseContext } from '../context/PurchaseContext';
import CreditCard from '../components/PaymentMethods/CreditCard';
import Amazon from '../components/PaymentMethods/Amazon';
import BankTransfer from '../components/PaymentMethods/BankTransfer';
import PayPall from '../components/PaymentMethods/PayPall';

const PayAndContract = ({ onButtonClick, selectedPlan }) => {
  const { purchaseData } = useContext(PurchaseContext);
  const { creditCardPaymentInfo, payPallPaymentInfo, amazonPaymentInfo, bankTransferPaymentInfo } = useContext(PaymentContext);
  const [paymentMethod, setPaymentMethod] = useState('');

  const handleButtonClick = () => {
    console.log('Método de pagamento:', paymentMethod);
    console.log('Plano selecionado:', selectedPlan.id, selectedPlan.moreFeatures);

    let paymentInfo = {};

    switch (paymentMethod) {
      case "Cartão de Crédito":
        paymentInfo = creditCardPaymentInfo;
        console.log('Switch Case:', paymentMethod, creditCardPaymentInfo);
        break;

      case "PayPall":
        paymentInfo = payPallPaymentInfo;
        console.log('Switch Case:', paymentMethod, payPallPaymentInfo);
        break;

      case "Pague com Amazon":
        paymentInfo = amazonPaymentInfo;
        console.log('Switch Case:', paymentMethod, amazonPaymentInfo);
        break;

      case "Débito Automático":
        paymentInfo = bankTransferPaymentInfo;
        console.log('Switch Case:', paymentMethod, bankTransferPaymentInfo);
        break;

      default:
        console.log('Switch Case:', paymentMethod, 'Método de pagamento não reconhecido');
    }

    onButtonClick({ ...selectedPlan, paymentMethod, paymentInfo });
  };

  let Component;
  if (paymentMethod === "Cartão de Crédito") {
    Component = <CreditCard onButtonClick={handleButtonClick} selectedPlan={selectedPlan} />;
  } else if (paymentMethod === "PayPall") {
    Component = <PayPall onButtonClick={handleButtonClick} selectedPlan={selectedPlan} />;
  } else if (paymentMethod === "Pague com Amazon") {
    Component = <Amazon onButtonClick={handleButtonClick} selectedPlan={selectedPlan} />;
  } else if (paymentMethod === "Débito Automático") {
    Component = <BankTransfer onButtonClick={handleButtonClick} selectedPlan={selectedPlan} />;
  }

  return (
    <div className='buynow-cards-container'>
      <div className='buynow-card-grid-3'>
        <div className='buynow-card-border'> 
          <h3 className='buynow-card-title pb-10'>Produto Selecionado</h3>
          <h3 className='buynow-card-title'>{selectedPlan.title}</h3>
          {selectedPlan.mostPopular && (
            <p className='buynow-card-border-popular'>
              Mais Popular
            </p>
          )}
          <p className='mt-4 buynow-card-text-sm'> 
            {selectedPlan.description}
          </p>
          <div className='mt-4 buynow-card-inside-black'>
            <p className='buynow-card-sale'>
              <span>{selectedPlan.currency}</span>
              <span className='ml-3 text-4xl text-neutral-200'>${selectedPlan.price}</span>
              <span>{selectedPlan.frequency}</span>
            </p>
          </div>

          <ul className='buynow-card-ul mt-6'>
            {selectedPlan.features.map((feature, index) => (
              <li key={index} className='buynow-card-text-sm'>
                * {feature}
              </li>
            ))}
          </ul>

        </div>
        
        <div className='relative buynow-card-border'>
          <form className='flex flex-col rounded-2xl bg-zinc text-neutral-100'>
            <div className='pb-6 flex flex-col items-center justify-center'>
              <h2 className='buynow-card-title pb-6'>Pagamento</h2>
              <div>
                <p className='mt-4 buynow-card-text-sm'> 
                  <span className='font-semibold'>Selecione o método de pagamento. </span>
                  Siga as instruções ao lado para realizar o pagamento.
                </p>
              </div>
            </div>
            <div className='mt-2 mb-12 space-y-4 flex-1' >
              <label>
                
                <input className='mx-2' type="radio" value="Cartão de Crédito" 
                  checked={paymentMethod === "Cartão de Crédito"} 
                  onChange={(e) => setPaymentMethod(e.target.value)} />
                Cartão de Crédito
                <br/>
              </label>
              <label>
                <input className='mx-2' type="radio" value="PayPall" 
                  checked={paymentMethod === "PayPall"} 
                  onChange={(e) => setPaymentMethod(e.target.value)} />
                PayPall
                <br/>
              </label>
              <label>
                <input className='mx-2' type="radio" value="Pague com Amazon" 
                  checked={paymentMethod === "Pague com Amazon"} 
                  onChange={(e) => setPaymentMethod(e.target.value)} />
                Pague com Amazon
                <br/>
              </label>
              <label>
                <input className='mx-2' type="radio" value="Débito Automático" 
                  checked={paymentMethod === "Débito Automático"} 
                  onChange={(e) => setPaymentMethod(e.target.value)} />
                Débito Automático
                <br/>
              </label>
            </div>
          </form>
          <div  className='text-white text-xs'>
                  <p className='text-white text-xs'>Nome do Usuário: {purchaseData.userName}</p>
                  <p className='text-white text-xs'>Email do Usuário: {purchaseData.email}</p>
                </div>
            </div>
            <div className=' -mx-4 buynow-card-border'> 
                <h3 className='buynow-card-title pb-6'>{paymentMethod}</h3>
                <div className="relative flex-center">
                    
                    {Component}
                    
                </div>
                <div >
                    </div>
                </div>
        </div>
    </div>
  );
};

PayAndContract.propTypes = {
  onButtonClick: PropTypes.func.isRequired,
  selectedPlan: PropTypes.object.isRequired,
};

export default PayAndContract;
