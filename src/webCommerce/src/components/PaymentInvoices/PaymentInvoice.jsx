

//PaymentInvoice.jsx
import PropTypes from 'prop-types';
import { useEffect, useState, useContext } from 'react';
import { PurchaseContext } from '../../context/PurchaseContext';
import { PayPallPaymentContext } from '../../context/PayPallPaymentContext';

function PaymentInvoice() {
  const { purchaseData } = useContext(PurchaseContext);
  const { payPallPaymentInfo } = useContext(PayPallPaymentContext);
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
  return (
    <div>
      <p>Plano selecionado: {purchaseData.selectedPlan}</p>
      <p>Nome do usuário: {purchaseData.userName}</p>
      <p>Email: {purchaseData.email}</p>
      <p>Metodo de Pagamento: {purchaseData.paymentMethod}</p>
      <p>PayPall Email: {payPallPaymentInfo.payPallEmail}</p>
      <p>PayPall Password: {payPallPaymentInfo.payPallPassword}</p>
      <p>PayPall Termos Aceitos: {payPallPaymentInfo.payPallTermsAccepted}</p>
      payPallPaymentInfo.payPallTermsAccepted
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
  paymentMethod: PropTypes.string.isRequired,
  payPallEmail: PropTypes.string,
  payPallPassword: PropTypes.string,
  payPallTermsAccepted: PropTypes.bool,
};


export default PaymentInvoice;
