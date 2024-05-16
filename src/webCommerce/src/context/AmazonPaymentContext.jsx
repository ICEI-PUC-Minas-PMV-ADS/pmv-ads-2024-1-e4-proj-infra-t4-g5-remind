
import PropTypes from 'prop-types';
import { createContext, useState } from 'react';

export const AmazonPaymentContext = createContext();

export const AmazonPaymentProvider = ({ children }) => {
  const [amazonPaymentInfo, setAmazonPaymentInfo] = useState({
    amazonEmail: '',
    amazonPassword: '',
    amazonTermsAccepted: false,
  });

  return (
    <AmazonPaymentContext.Provider value={{ amazonPaymentInfo, setAmazonPaymentInfo }}>
      {children}
    </AmazonPaymentContext.Provider>
  );
};

AmazonPaymentProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
