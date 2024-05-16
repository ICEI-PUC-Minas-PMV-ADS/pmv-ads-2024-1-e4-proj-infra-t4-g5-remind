
import PropTypes from 'prop-types';
import { createContext, useState } from 'react';

export const PayPallPaymentContext = createContext();

export const PayPallPaymentProvider = ({ children }) => {
  const [payPallPaymentInfo, setPayPallPaymentInfo] = useState({
    payPallEmail: '',
    payPallPassword: '',
    payPallTermsAccepted: false,
  });

  return (
    <PayPallPaymentContext.Provider value={{ payPallPaymentInfo, setPayPallPaymentInfo }}>
      {children}
    </PayPallPaymentContext.Provider>
  );
};
PayPallPaymentProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };