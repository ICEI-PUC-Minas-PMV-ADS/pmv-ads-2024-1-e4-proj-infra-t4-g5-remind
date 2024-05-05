import { useState } from 'react';
import Loader from './Loader';
import PropTypes from 'prop-types';

const PayAndContract = () => {
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
    <div className='relative flex flex-col items-center justify-center bg-zinc text-neutral-100 p-8 shadow-lg'>
        <div className='mx-auto grid max-w-7xl grid-cols-3 gap-8 py-12 px-4 sm:px-6 lg:px-8'>
            <div className='relative flex flex-col items-center justify-center rounded-2xl bg-zinc text-neutral-100 p-8 shadow-lg'>

            </div>
        
            <div className='relative flex flex-col rounded-2xl border border-purple-500 bg-zinc text-neutral-100 p-8 shadow-lg'>
                <form className='relative flex flex-col rounded-2xl bg-zinc text-neutral-100 p-8'>
                    <div className='text-neutral-100 text-2xl pb-4'>
                        <h2>Pagamento</h2>
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
                            className={`mt-8 block rounded-lg  px-6 py-4 text-center text-sm font-semibold leading-4 ${paymentMethod ? 'btn-buynow' : 'btn-disabled'}`}
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
  };

export default PayAndContract;
