import { useState } from 'react';
import Loader from '../Loader';
import { Banks } from '../../constants';
import PropTypes from 'prop-types';

function BankTransfer({ onButtonClick, isLoading }) {
  const [bank, setBank] = useState('');
  const [agency, setAgency] = useState('');
  const [account, setAccount] = useState('');
  const [accountDigit, setAccountDigit] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [accountType, setAccountType] = useState('corrente');
  const [cpf, setCpf] = useState('');
  const [name, setName] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleButtonClick = (event) => {
    event.preventDefault();
    if (bank && agency && account && accountDigit && cpf && name && termsAccepted) {
      onButtonClick();
    } else {
      alert('Por favor, preencha todos os campos e aceite os termos e condições.');
    }
  };

  const handleAgencyInputChange = (event) => {
    const { value } = event.target;
    // Adiciona zeros à esquerda para preencher até 4 caracteres
    const paddedValue = value.padStart(4, '0').slice(0, 4);
    setAgency(paddedValue);
  };

  const handleAccountInputChange = (event) => {
    const { value } = event.target;
    // Remove todos os caracteres não numéricos
    const onlyNumbers = value.replace(/[^\d]/g, '');
    setAccount(onlyNumbers);
  };

  const handleAccountDigitInputChange = (event) => {
    const { value } = event.target;
    // Remove todos os caracteres não numéricos
    const onlyNumbers = value.replace(/[^\d]/g, '');
    // Limita o valor a 2 caracteres
    const limitedValue = onlyNumbers.slice(0, 2);
    setAccountDigit(limitedValue);
  };

  const handleNameInputChange = (event) => {
    const { value } = event.target;
    // Remove caracteres especiais e números
    const onlyLetters = value.replace(/[^a-zA-Z\s]/g, '');
    // Converte a primeira letra de cada palavra para maiúscula
    const formattedValue = onlyLetters.replace(/\b\w/g, (char) => char.toUpperCase());
    setName(formattedValue);
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
          <div>
            <label htmlFor="bank" className='buynow-card-text-sm'>Banco</label>
              <select 
                id="bank" 
                name="bank" 
                required 
                onChange={(e) => setBank(e.target.value)} 
                className='text-gray-500 text-sm p-1.5 font-thin w-full'>
                  <option value="">Selecione um banco</option>
                  {Banks.map((bank, index) => (
                    <option key={index} value={bank}>{bank}</option>
                  ))}
              </select>
          </div>
          <div className='flex mt-1.5'>
            <div className='buynow-input-text w-4/5 mr-2'>
              <label htmlFor="account" className='buynow-card-text-sm'>Número da Conta</label>
              <input 
                type="text" 
                id="account" 
                name="account" 
                required 
                value={account} 
                onChange={handleAccountInputChange} 
                className='w-full'/>
            </div>
            <div className='buynow-input-text w-1/5'>
              <label htmlFor="accountDigit" className='buynow-card-text-sm'>Dígito</label>
              <input 
                type="text" 
                id="accountDigit" 
                name="accountDigit" 
                required 
                value={accountDigit} 
                onChange={handleAccountDigitInputChange} 
                maxLength="2"
                className='w-full'/>
            </div>
          </div>
          <div className='buynow-input-text -mt-3'>
            <div>
              <label htmlFor="corrente" className='buynow-card-text-sm mr-2'>
                <input 
                  type="radio" 
                  id="corrente" 
                  name="accountType" 
                  value="corrente" 
                  required 
                  onChange={(e) => setAccountType(e.target.value)} />
                Corrente
              </label>
              <label htmlFor="poupanca" className='buynow-card-text-sm'>
                <input 
                  type="radio" 
                  id="poupanca" 
                  name="accountType" 
                  value="poupanca" 
                  required 
                  onChange={(e) => setAccountType(e.target.value)} />
                Poupança
              </label>
            </div>
          </div>
          <div className='buynow-input-text'>
            <input 
              type="text" 
              id="agency" 
              name="agency" 
              placeholder='Agência' 
              required 
              value={agency} 
              onChange={handleAgencyInputChange} 
              maxLength="4"
              className='w-full'/>
          </div>
          <div className='buynow-input-text'>
            <input 
              type="text" 
              id="cpf" 
              name="cpf" 
              placeholder='CPF' 
              value={cpf}
              onChange={(e) => setCpf(e.target.value)} 
              maxLength="14" // Limita o tamanho máximo do input
              className='w-full placeholder-gray-500 text-sm p-1 font-thin'/>
          </div>
          <div className='buynow-input-text'>
            <input 
              type="text" 
              id="name" 
              name="name" 
              placeholder='Nome Completo' 
              required 
              value={name} 
              onChange={handleNameInputChange} 
              className='w-full placeholder-gray-500 text-sm p-1 font-thin'/>
          </div>
          <div className="checkbox-container pt-2">
            <input 
              type="checkbox" 
              id="terms" 
              name="terms" 
              className='ml-2' 
              required 
              onChange={(e) => setTermsAccepted(e.target.checked)} />
            <label htmlFor="terms" className="checkbox-text-agree mt-3 ml-2">
              Eu autorizo o débito direto em conta corrente.
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
