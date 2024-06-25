import { useContext } from 'react';
import PropTypes from 'prop-types';
import { PaymentContext } from '../../context/PaymentContext';
import BankField from './BankTransfer/BankField';
import AccountInput from './BankTransfer/AccountInput';
import AccountDigitInput from './BankTransfer/AccountDigitInput';
import AgencyInput from './BankTransfer/AgencyInput';
import CPFInput from './BankTransfer/CPFInput';
import NameInput from './BankTransfer/NameInput';
import TermsCheckbox from './BankTransfer/TermsCheckbox';

function BankTransfer({ onButtonClick, selectedPlan }) {

  const { bankTransferPaymentInfo, setBankTransferPaymentInfo } = useContext(PaymentContext);

  const handleInputChange = (fieldName, value) => {

    setBankTransferPaymentInfo(prevInfo => ({ ...prevInfo, [fieldName]: value }));
  };

  const handleButtonClick = (event) => {
    event.preventDefault();
    if (
      bankTransferPaymentInfo.bankName &&
      bankTransferPaymentInfo.bankAccountNumber &&
      bankTransferPaymentInfo.bankRoutingNumber &&
      bankTransferPaymentInfo.bankAccountAgencyNumber &&
      bankTransferPaymentInfo.clientName &&
      bankTransferPaymentInfo.clienteCpf &&
      bankTransferPaymentInfo.bankTransferTermsAccepted
    ) {
      onButtonClick(bankTransferPaymentInfo, selectedPlan);
      } else {
      alert('Por favor, preencha todos os campos e aceite os termos e condições.');
    }
  };

  return (
    <div>
      <form className='relative -mx-4 flex flex-col py-4 px-2'>
        <BankField 
            value={bankTransferPaymentInfo.bankName} onChange={(e) => handleInputChange('bankName', e.target.value)} />
        <div className='flex mt-1.5'>
          <AccountInput 
            value={bankTransferPaymentInfo.bankAccountNumber} 
            onChange={(value) => handleInputChange('bankAccountNumber', value)}
             />
          <AccountDigitInput 
            value={bankTransferPaymentInfo.bankRoutingNumber} 
            onChange={(value) => handleInputChange('bankRoutingNumber', value)} 
            />
          <AgencyInput 
            value={bankTransferPaymentInfo.bankAccountAgencyNumber} 
            onChange={(value) => handleInputChange('bankAccountAgencyNumber', value)} 
            />
        </div>
        <CPFInput 
          value={bankTransferPaymentInfo.clienteCpf} 
          onChange={(value) => handleInputChange('clienteCpf', value)} />
        <NameInput 
          value={bankTransferPaymentInfo.clientName} onChange={(value) => handleInputChange('clientName', value)} />
        <TermsCheckbox 
          checked={bankTransferPaymentInfo.bankTransferTermsAccepted} 
          onChange={(value) => handleInputChange('bankTransferTermsAccepted', value)} 
           />
      </form>
      <div className="flex justify-center mt-8">
          <button
            onClick={handleButtonClick}
            className={`btn-buynow-popular w-11/12`}
          >
            Autorizar
          </button>
      </div>
    </div>
  );
}

BankTransfer.propTypes = {
  onButtonClick: PropTypes.func.isRequired,
  selectedPlan: PropTypes.object.isRequired,
};

export default BankTransfer;
