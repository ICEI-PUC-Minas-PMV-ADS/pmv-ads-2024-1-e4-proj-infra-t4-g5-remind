// PaymentInvoice.jsx
import PropTypes from 'prop-types';
import { useEffect, useState, useContext } from 'react';
import { PurchaseContext } from '../../context/PurchaseContext';
import { PaymentContext } from '../../context/PaymentContext';

function PaymentInvoice() {
  const { purchaseData } = useContext(PurchaseContext);
  const { 
    creditCardPaymentInfo, 
    payPallPaymentInfo, 
    amazonPaymentInfo, 
    bankTransferPaymentInfo 
  } = useContext(PaymentContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkData = () => {
      console.log('Verificando dados...');

      if (purchaseData && purchaseData.paymentMethod && purchaseData.userName && purchaseData.email) {
        setLoading(false);
        console.log('Todas as informações recebidas.');
        console.log('Invoice Data: Plano', purchaseData.selectedPlan);
        console.log('Invoice Data: Compra', purchaseData);
        console.log('Invoice Data: Pagamento', payPallPaymentInfo);

        clearInterval(checkInterval);
      } else {
        setLoading(true);
        console.log('Informações incompletas. Aguardando mais dados...');
      }
    };

    const checkInterval = setInterval(checkData, 1000);

    return () => clearInterval(checkInterval);
  }, [purchaseData]);

  if (loading) {
    console.log('Renderizando Loading...');
    return <div className='mt-4 buynow-card-text-sm'>Loading...</div>;
  }

  console.log('Renderizando componente corretamente...');

  let paymentInfo = null;
  switch (purchaseData.paymentMethod) {
    case 'Débito Automático':
      paymentInfo = bankTransferPaymentInfo;
      break;
    case 'PayPall':
      paymentInfo = payPallPaymentInfo;
      break;
    case 'Pague com Amazon':
      paymentInfo = amazonPaymentInfo;
      break;
    case 'Cartão de Crédito':
      paymentInfo = creditCardPaymentInfo;
      break;
    default:
      break;
  }

  return (
    <div>
      <p>Plano selecionado: {purchaseData.selectedPlan.title}</p>
      <p>Nome do usuário: {purchaseData.userName}</p>
      <p>Email: {purchaseData.email}</p>
      <p>Metodo de Pagamento: {purchaseData.paymentMethod}</p>
      {paymentInfo && (
        <>
          {purchaseData.paymentMethod === 'Débito Automático' && (
            <>
              <p>Nome do Banco: {paymentInfo.bankName}</p>
              <p>Número da Conta: {paymentInfo.bankAccountNumber}</p>
              <p>Número do Banco: {paymentInfo.bankRoutingNumber}</p>
              <p>Número da Agência: {paymentInfo.bankAccountAgencyNumber}</p>
              <p>Nome do Cliente: {paymentInfo.clientName}</p>
              <p>CPF do Cliente: {paymentInfo.clienteCpf}</p>
              <p>Termos Aceitos: {paymentInfo.bankTransferTermsAccepted}</p>
            </>
          )}
          {purchaseData.paymentMethod === 'PayPall' && (
            <>
              <p>PayPall Email: {paymentInfo.payPallEmail}</p>
              <p>PayPall Password: {paymentInfo.payPallPassword}</p>
              <p>PayPall Termos Aceitos: {paymentInfo.payPallTermsAccepted}</p>
            </>
          )}
          {purchaseData.paymentMethod === 'Pague com Amazon' && (
            <>
              <p>Amazon Email: {paymentInfo.amazonEmail}</p>
              <p>Amazon Password: {paymentInfo.amazonPassword}</p>
              <p>Amazon Termos Aceitos: {paymentInfo.amazonTermsAccepted}</p>
            </>
          )}
          {purchaseData.paymentMethod === 'Cartão de Crédito' && (
            <>
              <p>Marca do Cartão: {paymentInfo.creditCardBrand}</p>
              <p>Número do Cartão: {paymentInfo.creditCardNumber}</p>
              <p>Vencimento do Cartão: {paymentInfo.creditCardExpiry}</p>
              <p>CVS do Cartão: {paymentInfo.creditCardCVS}</p>
              <p>Nome do Cliente: {paymentInfo.clientName}</p>
              <p>CPF do Cliente: {paymentInfo.clienteCpf}</p>
              <p>Termos Aceitos: {paymentInfo.creditCardTermsAccepted}</p>
            </>
          )}
        </>
      )}
    </div>
  );
}

PaymentInvoice.propTypes = {
  selectedPlan: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
    frequency: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    features: PropTypes.arrayOf(PropTypes.string).isRequired,
    moreFeatures: PropTypes.arrayOf(PropTypes.string).isRequired,
    cta: PropTypes.string.isRequired,
    mostPopular: PropTypes.bool.isRequired,
  }).isRequired,
  userName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  paymentMethod: PropTypes.string,
  payPallEmail: PropTypes.string,
  payPallPassword: PropTypes.string,
  payPallTermsAccepted: PropTypes.bool,
  amazonEmail: PropTypes.string,
  amazonPassword: PropTypes.string,
  amazonTermsAccepted: PropTypes.bool,
  bankName: PropTypes.string,
  bankAccountNumber: PropTypes.string,
  bankRoutingNumber: PropTypes.string,
  bankAccountAgencyNumber: PropTypes.string,
  bankTransferTermsAccepted: PropTypes.bool,
  creditCardBrand: PropTypes.string,
  creditCardNumber: PropTypes.string,
  creditCardExpiry: PropTypes.string,
  creditCardCVS: PropTypes.string,
  creditCardTermsAccepted: PropTypes.bool,
};

export default PaymentInvoice;
