
//PurchaseContext.jsx
import { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import { pricingPlans } from '../constants';

export const PurchaseContext = createContext();

export const PurchaseProvider = ({ children }) => {
  const [purchaseData, setPurchaseData] = useState({
    selectedPlan: pricingPlans[0],
    userName: '',
    email: '',
    password: '',
    termsAccepted: false,
    paymentMethod: '',
    payPallEmail: '',
    payPallPassword: '',
    payPallTermsAccepted: false,
  });

  return (
    <PurchaseContext.Provider value={{ purchaseData, setPurchaseData }}>
      {children}
    </PurchaseContext.Provider>
  );
};

PurchaseProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
