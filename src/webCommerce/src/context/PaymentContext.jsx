
// PaymentContext.jsx
import PropTypes from 'prop-types';
import { createContext, useState } from 'react';

export const PaymentContext = createContext();

export const PaymentProvider = ({ children }) => {
  const [creditCardPaymentInfo, setCreditCardPaymentInfo] = useState({
    creditCardNumber: '',
    creditCardExpiry: '',
    creditCardCVC: '',
    creditCardTermsAccepted: false,
  });

  const [payPallPaymentInfo, setPayPallPaymentInfo] = useState({
    payPallEmail: '',
    payPallPassword: '',
    payPallTermsAccepted: false,
  });

  const [amazonPaymentInfo, setAmazonPaymentInfo] = useState({
    amazonEmail: '',
    amazonPassword: '',
    amazonTermsAccepted: false,
  });

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
    <PaymentContext.Provider value={{
      creditCardPaymentInfo, setCreditCardPaymentInfo,
      payPallPaymentInfo, setPayPallPaymentInfo,
      amazonPaymentInfo, setAmazonPaymentInfo,
      bankTransferPaymentInfo, setBankTransferPaymentInfo,
    }}>
      {children}
    </PaymentContext.Provider>
  );
};

PaymentProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
