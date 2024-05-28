import { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { PaymentContext } from '../../context/PaymentContext';
import CreditCardField from './CreditCard/CreditCardField';
import CardNumberInput from './CreditCard/CardNumberInput';
import CVSInput from './CreditCard/CVSInput';
import CPFInput from './CreditCard/CPFInput';
import NameInput from './CreditCard/NameInput';
import GoodUntil from './CreditCard/GoodUntil';

function CreditCard({ onButtonClick, selectedPlan }) {
  const [creditCard, setCreditCard] = useState('');
  const [cardNumber, setCardNumber] = useState('');

  const { creditCardPaymentInfo, setCreditCardPaymentInfo } = useContext(PaymentContext);

  const handleCardNumberChange = (cardNumber, cardBrand) => {
    setCardNumber(cardNumber);
    setCreditCard(cardBrand);
    setCreditCardPaymentInfo(prevInfo => ({
      ...prevInfo,
      creditCardBrand: cardBrand,
      creditCardNumber: cardNumber
    }));
  };

  const handleInputChange = (fieldName, value) => {
    if (fieldName === 'creditCardExpiry') {
      if (typeof value === 'string') {
        value = new Date(value);
      }
    }
    setCreditCardPaymentInfo(prevInfo => ({ ...prevInfo, [fieldName]: value }));
  };

  const handleButtonClick = (event) => {
    event.preventDefault();
    if (
      creditCardPaymentInfo.creditCardBrand &&
      creditCardPaymentInfo.creditCardNumber &&
      creditCardPaymentInfo.creditCardExpiry &&
      creditCardPaymentInfo.creditCardCVS &&
      creditCardPaymentInfo.clientName &&
      creditCardPaymentInfo.clienteCpf
    ) {
      onButtonClick(creditCardPaymentInfo, selectedPlan);
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  };

  
  return (
    <div>
      <form className='relative -mx-4 flex flex-col py-4 px-2'>
      <CreditCardField value={creditCard} />
        <CardNumberInput value={cardNumber} onChange={handleCardNumberChange} />
        <div className='flex -mt-3'>
          <GoodUntil value={creditCardPaymentInfo.creditCardExpiry} onChange={(value) => handleInputChange('creditCardExpiry', value)} />
          <CVSInput value={creditCardPaymentInfo.creditCardCVS} onChange={(value) => handleInputChange('creditCardCVS', value)} />
          <CPFInput value={creditCardPaymentInfo.clienteCpf} onChange={(value) => handleInputChange('clienteCpf', value)} />
        </div>
        <NameInput value={creditCardPaymentInfo.clientName} onChange={(value) => handleInputChange('clientName', value)} />
      </form>
      <div className="flex justify-center mt-24">
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

CreditCard.propTypes = {
  onButtonClick: PropTypes.func.isRequired,
  selectedPlan: PropTypes.object.isRequired,
  userName: PropTypes.string,
  email: PropTypes.string,
  termsAccepted: PropTypes.bool,
};

export default CreditCard;
