
// CreditCard.jsx

import { useState } from 'react';
import Loader from '../Loader';
import PropTypes from 'prop-types';
import CreditCardField from '../PaymentMethods/CreditCard/CreditCardField';
import CardNumberInput from '../PaymentMethods/CreditCard/CardNumberInput';
import CVSInput from '../PaymentMethods/CreditCard/CVSInput';
import CPFInput from '../PaymentMethods/CreditCard/CPFInput';
import NameInput from '../PaymentMethods/CreditCard/NameInput';

function CreditCard({ onButtonClick, isLoading }) {
  const [creditCard, setCreditCard] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cvs, setCVS] = useState('');
  const [cpf, setCpf] = useState('');
  const [name, setName] = useState('');

  const handleButtonClick = (event) => {
    event.preventDefault();
    if (creditCard && cardNumber && cvs && cpf && name) {
      onButtonClick();
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  };

  return (
    <div>
      <form className='relative -mx-4 flex flex-col py-4 px-2'>
        <div className='pb-4 flex flex-col items-center justify-center'>
          <div>
            <p className='buynow-card-text-sm'>
              Pagamento com Cartão de Crédito.
            </p>
          </div>
        </div>
         <CreditCardField value={creditCard} onChange={(e) => setCreditCard(e.target.value)} />
        <div className='flex mt-1.5'>
          <CardNumberInput value={cardNumber} onChange={setCardNumber} />
          <CVSInput value={cvs} onChange={setCVS} />
        </div>
        <CPFInput value={cpf} onChange={setCpf} />
        <NameInput value={name} onChange={setName} />
      </form>
      <div className="flex justify-center mt-8">
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
};

export default CreditCard;
