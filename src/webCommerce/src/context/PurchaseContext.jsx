import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const PurchaseContext = createContext();

export const PurchaseProvider = ({ children }) => {
  const [purchaseData, setPurchaseData] = useState({
    selectedPlan: null,
    userName: '',
    email: '',
    password: '',
    termsAccepted: false,
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
