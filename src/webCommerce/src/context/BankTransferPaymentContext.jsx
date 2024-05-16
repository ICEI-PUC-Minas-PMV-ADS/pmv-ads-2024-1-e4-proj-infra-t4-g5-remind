
import PropTypes from 'prop-types';
import { createContext, useState } from 'react';

export const BankTransferPaymentContext = createContext();

  

export const BankTransferPaymentProvider = ({ children }) => {
  const [bankTransferPaymentInfo, setBankTransferPaymentInfo] = useState({
    bankName: '',
    bankAccountNumber: '',
    bankRoutingNumber: '',
    bankAccountAgencyNumber: '',
    clientName: '',
    clienteCpf: '',
    bankTransferTermsAccepted: false,
  });

  return (
    <BankTransferPaymentContext.Provider value={{ bankTransferPaymentInfo, setBankTransferPaymentInfo }}>
      {children}
    </BankTransferPaymentContext.Provider>
  );
};

BankTransferPaymentProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
