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
          onChange={(e) => setBankTransferPaymentInfo(prevInfo => ({ ...prevInfo, bankName: e.target.checked }))} />
        <div className='flex mt-1.5'>
          <AccountInput 
            onChange={(e) => setBankTransferPaymentInfo(prevInfo => ({ ...prevInfo, bankAccountNumber: e.target.checked }))} />
          <AccountDigitInput 
            onChange={(e) => setBankTransferPaymentInfo(prevInfo => ({ ...prevInfo, bankRoutingNumber: e.target.checked }))} />
          <AgencyInput 
            onChange={(e) => setBankTransferPaymentInfo(prevInfo => ({ ...prevInfo, bankAccountAgencyNumber: e.target.checked }))} />
        </div>
        <CPFInput 
          onChange={(e) => setBankTransferPaymentInfo(prevInfo => ({ ...prevInfo, clienteCpf: e.target.checked }))} />
        <NameInput 
          onChange={(e) => setBankTransferPaymentInfo(prevInfo => ({ ...prevInfo, clientName: e.target.checked }))} />
        <TermsCheckbox 
          onChange={(e) => setBankTransferPaymentInfo(prevInfo => ({ ...prevInfo, bankTransferTermsAccepted: e.target.checked }))} />
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
