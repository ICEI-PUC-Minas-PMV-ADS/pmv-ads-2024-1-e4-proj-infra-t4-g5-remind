
// CreditCard.jsx

import { useState } from 'react';
import Loader from '../Loader';
import PropTypes from 'prop-types';
import CreditCardField from '../PaymentMethods/CreditCard/CreditCardField';
import CardNumberInput from '../PaymentMethods/CreditCard/CardNumberInput';
import CVSInput from '../PaymentMethods/CreditCard/CVSInput';
import CPFInput from '../PaymentMethods/CreditCard/CPFInput';
import NameInput from '../PaymentMethods/CreditCard/NameInput';
import GoodUntil from './CreditCard/GoodUntil';

function CreditCard({ onButtonClick, isLoading, selectedPlan, userName, email, termsAccepted }) {
  const [creditCard, setCreditCard] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [goodUntil, setGoodUntil] = useState('');
  const [cvs, setCVS] = useState('');
  const [cpf, setCpf] = useState('');
  const [name, setName] = useState('');

  const handleCardNumberChange = (cardNumber, cardBrand) => {
    setCardNumber(cardNumber);
    setCreditCard(cardBrand);
  };

  const handleButtonClick = (event) => {
    event.preventDefault();
    if (creditCard && cardNumber && goodUntil && cvs && cpf && name) {
      onButtonClick(selectedPlan, userName, email, termsAccepted, cpf, name);
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
          <GoodUntil value={goodUntil} onChange={setGoodUntil} />
          <CVSInput value={cvs} onChange={setCVS} />
          <CPFInput value={cpf} onChange={setCpf} />
        </div>
        <NameInput value={name} onChange={setName} />
      </form>
      <div className="flex justify-center mt-24">
        {isLoading ? (
          <Loader />
        ) : (
          <button
            onClick={handleButtonClick}
            className={`btn-buynow-popular w-11/12 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            Pagar
          </button>
        )}
      </div>
    </div>
  );
}

CreditCard.propTypes = {
  onButtonClick: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  selectedPlan: PropTypes.object.isRequired,
  userName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  termsAccepted: PropTypes.bool.isRequired,
};

export default CreditCard;
