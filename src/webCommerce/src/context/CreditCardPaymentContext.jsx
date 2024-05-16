// CreditCardPaymentContext.jsx
import PropTypes from 'prop-types';
import { createContext, useState } from 'react';

export const CreditCardPaymentContext = createContext();

export const CreditCardPaymentProvider = ({ children }) => {
  const [creditCardPaymentInfo, setCreditCardPaymentInfo] = useState({
    creditCardNumber: '',
    creditCardExpiry: '',
    creditCardCVC: '',
    creditCardTermsAccepted: false,
  });

  return (
    <CreditCardPaymentContext.Provider value={{ creditCardPaymentInfo, setCreditCardPaymentInfo }}>
      {children}
    </CreditCardPaymentContext.Provider>
  );
};

CreditCardPaymentProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
