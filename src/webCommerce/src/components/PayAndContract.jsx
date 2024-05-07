//PayAndContract.jsx

import { useState } from 'react';
import Loader from './Loader';
import PropTypes from 'prop-types';

const PayAndContract = ({selectedPlan}) => {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleButtonClick = () => {
    setIsLoading(true);
  
    setTimeout(() => {
      setIsLoading(false);
      window.location.href = 'http://localhost:5173/';
    }, 1500);
  };
  

  return (
    <div className='buynow-cards-container'>
      <div className='buynow-card-grid-3'>
        <div className='buynow-card-border'> 
          <h3 className='buynow-card-title pb-10'>Produto Selecionado:</h3>
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
        
            <div className='-mx-4 buynow-card-border'>
                <form className='relative flex flex-col rounded-2xl bg-zinc text-neutral-100'>
                <div className='pb-6 flex flex-col items-center justify-center'>
                    <h2 className='buynow-card-title pb-6'>Pagamento</h2>
                        <div>
                            <p className='mt-4 buynow-card-text-sm'> 
                                <span className='font-semibold'>Selecione o metodo para pagamento. </span>
                                Siga as instruções ao lado para realizar o pagamento.
                            </p>
                        </div>
                </div>
                    <div className='mt-2 mb-12 space-y-4 flex-1' >
                    <label>
                        <input className='mx-2' type="radio" value="Cartão de Crédito" checked={paymentMethod === "Cartão de Crédito"} onChange={(e) => setPaymentMethod(e.target.value)} />
                        
                        Cartão de Crédito
                        <br/>
                    </label>
                    <label>
                        <input className='mx-2' type="radio" value="PayPall" checked={paymentMethod === "PayPall"} onChange={(e) => setPaymentMethod(e.target.value)} />
                        PayPall
                        <br/>
                    </label>
                    <label>
                        <input className='mx-2' type="radio" value="pague com Amazon" checked={paymentMethod === "pague com Amazon"} onChange={(e) => setPaymentMethod(e.target.value)} />
                        Pague com Amazon
                        <br/>
                    </label>
                    <label>
                        <input className='mx-2' type="radio" value="Depósito Bancário" checked={paymentMethod === "Depósito Bancário"} onChange={(e) => setPaymentMethod(e.target.value)} />
                        Depósito Bancário
                        <br/>
                    </label>
                    </div>

                    {isLoading ? (
                        <Loader />
                        ) : (
                        <button href='#'
                            onClick={handleButtonClick}
                            className={`mt-24 ${paymentMethod ? 'btn-buynow-popular' : 'btn-disabled'}`}
                        >
                            Pagar
                        </button>
                        )}
                </form>
            </div>
                <div className='relative flex flex-col items-center justify-center rounded-2xl bg-zinc text-neutral-100 p-8 shadow-lg'>

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
