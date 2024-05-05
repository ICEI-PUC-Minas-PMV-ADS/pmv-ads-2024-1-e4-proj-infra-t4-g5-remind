import { useState } from 'react';
import PropTypes from 'prop-types';

const PayAndContract = ({ onButtonClick }) => {
  const [paymentMethod, setPaymentMethod] = useState('');

  return (
    <div className='relative flex flex-col rounded-2xl border border-purple-500 bg-zinc text-neutral-100 p-8 shadow-lg'>
      <form>
        <div>
          <label>
            <input type="radio" value="Cartão de Crédito" checked={paymentMethod === "Cartão de Crédito"} onChange={(e) => setPaymentMethod(e.target.value)} />
            Cartão de Crédito
          </label>
          <label>
            <input type="radio" value="PayPall" checked={paymentMethod === "PayPall"} onChange={(e) => setPaymentMethod(e.target.value)} />
            PayPall
          </label>
          <label>
            <input type="radio" value="pague com Amazon" checked={paymentMethod === "pague com Amazon"} onChange={(e) => setPaymentMethod(e.target.value)} />
            pague com Amazon
          </label>
          <label>
            <input type="radio" value="Depósito Bancário" checked={paymentMethod === "Depósito Bancário"} onChange={(e) => setPaymentMethod(e.target.value)} />
            Depósito Bancário
          </label>
        </div>
        <button href='#'
          onClick={onButtonClick}
          className={`mt-8 block rounded-lg  px-6 py-4 text-center text-sm font-semibold leading-4 ${paymentMethod ? 'btn-buynow' : 'btn-disabled'}`}
        >
          Pagar
        </button>
      </form>
    </div>
  );
};

PayAndContract.propTypes = {
    onButtonClick: PropTypes.func.isRequired,
  };

export default PayAndContract;
