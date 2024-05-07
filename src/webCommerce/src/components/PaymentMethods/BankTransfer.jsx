import { useState } from 'react';
import Loader from '../Loader';
import { Banks } from '../../constants';
import PropTypes from 'prop-types';

function BankTransfer({ onButtonClick, isLoading }) {

  const [bank, setBank] = useState('');
  const [agency, setAgency] = useState('');
  const [account, setAccount] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [accountType, setAccountType] = useState('corrente');
  const [cpf, setCpf] = useState('');
  const [name, setName] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleButtonClick = (event) => {
    event.preventDefault();
    if (bank && agency && account && cpf && name && termsAccepted) {
      onButtonClick();
    } else {
      alert('Por favor, preencha todos os campos e aceite os termos e condições.');
    }
  };

  return (
    <div>
      <form className='relative -mx-4 flex flex-col py-4 px-2'>
        <div className='pb-4 flex flex-col items-center justify-center'>
          <div>
            <p className='buynow-card-text-sm'>
              Autorização para Débito Automático.
            </p>
          </div>
        </div>
        <div className='flex flex-col'>
          <div className=''>
            <label htmlFor="bank" className='buynow-card-text-sm'>Banco</label>
            <select id="bank" name="bank" required onChange={(e) => setBank(e.target.value)} className='text-gray-500 text-sm p-1.5 font-thin w-full'>
              <option value="">Selecione um banco</option>
              {Banks.map((bank, index) => (
                <option key={index} value={bank}>{bank}</option>
              ))}
            </select>
          </div>
          <div className='flex mt-1.5'>
            <div className='buynow-input-text w-4/5 mr-2'>
              <label htmlFor="account" className='buynow-card-text-sm'>Conta Corrente</label>
              <input type="text" id="account" name="account" required onChange={(e) => setAccount(e.target.value)} className='w-full'/>
            </div>
            <div className='buynow-input-text w-1/5'>
              <label htmlFor="agency" className='buynow-card-text-sm'>Agência</label>
              <input type="text" id="agency" name="agency" required onChange={(e) => setAgency(e.target.value)} className='w-full'/>
            </div>
          </div>
          <div className='buynow-input-text -mt-3'>
            <div>
              <label htmlFor="corrente" className='buynow-card-text-sm mr-2'>
                <input type="radio" id="corrente" name="accountType" value="corrente" required onChange={(e) => setAccountType(e.target.value)} />
                Corrente
              </label>
              <label htmlFor="poupanca" className='buynow-card-text-sm'>
                <input type="radio" id="poupanca" name="accountType" value="poupanca" required onChange={(e) => setAccountType(e.target.value)} />
                Poupança
              </label>
            </div>
          </div>
          <div className='buynow-input-text'>
            <label htmlFor="cpf" className='buynow-card-text-sm'>CPF</label>
            <input type="text" id="cpf" name="cpf" required onChange={(e) => setCpf(e.target.value)} className='w-full'/>
          </div>
          <div className='buynow-input-text'>
            <label htmlFor="name" className='buynow-card-text-sm'>Nome Completo</label>
            <input type="text" id="name" name="name" required onChange={(e) => setName(e.target.value)} className='w-full'/>
          </div>
          <div className="checkbox-container">
            <input type="checkbox" id="terms" name="terms" className='ml-2' required onChange={(e) => setTermsAccepted(e.target.checked)} />
            <label htmlFor="terms" className="buynow-card-text-sm mt-3 ml-2">
              Eu autorizo o débito direto na seguinte conta corrente.
            </label>
          </div>
        </div>
      </form>
      <div className="flex justify-center mt-8">
        {isLoading ? (
          <Loader />
        ) : (
          <button
            onClick={handleButtonClick}
            className={`btn-buynow-popular w-11/12 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            Autorizar
          </button>
        )}
      </div>
    </div>
  );
}

BankTransfer.propTypes = {
  onButtonClick: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default BankTransfer;
