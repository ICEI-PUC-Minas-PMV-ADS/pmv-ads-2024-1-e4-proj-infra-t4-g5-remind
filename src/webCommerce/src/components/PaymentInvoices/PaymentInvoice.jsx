import PropTypes from 'prop-types';
import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import mongoose from 'mongoose';
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

  const getPaymentInfo = () => {
    switch (purchaseData.paymentMethod) {
      case 'Débito Automático':
        return bankTransferPaymentInfo;
      case 'PayPall':
        return payPallPaymentInfo;
      case 'Pague com Amazon':
        return amazonPaymentInfo;
      case 'Cartão de Crédito':
        return creditCardPaymentInfo;
      default:
        return null;
    }
  };

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

        createPurchase();
        
        createPayment();

      } else {
        setLoading(true);
        console.log('Informações incompletas. Aguardando mais dados...');
      }
    };

    const createPurchase = async () => {

      const purchase = {
        //Plan Data
        plan_id: purchaseData.selectedPlan.id,
        plan: purchaseData.selectedPlan.title,
        price: purchaseData.selectedPlan.price,
        currency: purchaseData.selectedPlan.currency,
        frequency: purchaseData.selectedPlan.frequency,
        mostPopular: purchaseData.selectedPlan.mostPopular,
        description: purchaseData.selectedPlan.description,
        features: purchaseData.selectedPlan.features,
        moreFeatures: purchaseData.selectedPlan.moreFeatures,
        // Adm User Login Data
        userName: purchaseData.userName,
        email: purchaseData.email,
        password: purchaseData.password,
        //Terms
        termsAccepted: purchaseData.termsAccepted,
      };

      try {
        const response = await axios.post('http://localhost:5000/purchase', purchase, {
          headers: {
            'Content-Type': 'application/json'
          }
        });
        console.log('Purchase criada com sucesso:', response.data);
      } catch (error) {
        console.error('Erro ao criar purchase:', error);
      }
    };

    const createPayment = async () => {
      const paymentInfo = getPaymentInfo();

      const payment = {
        payment_id: new mongoose.Types.ObjectId().toString(),
        paymentMethod: purchaseData.paymentMethod,
        ...paymentInfo,
      };

      try {
        const response = await axios.post('http://localhost:5000/payment', payment, {
          headers: {
            'Content-Type': 'application/json'
          }
        });
        console.log('Payment criado com sucesso:', response.data);
      } catch (error) {
        console.error('Erro ao criar payment:', error);
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

  const paymentInfo = getPaymentInfo();

  return (
    <div className='screen-max-width'>
      <div className='buynow-cards-container'>
        <div className='buynow-card-border'>
          <h3 className='text-5xl pb-8 font-semibold text-neutral-100 leading-6'>Resumo do Plano:</h3>
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
                  <p>Termos Aceitos: {typeof paymentInfo.bankTransferTermsAccepted === 'string' ? paymentInfo.bankTransferTermsAccepted : paymentInfo.bankTransferTermsAccepted.toString()}</p>
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
                  <p>Vencimento do Cartão: {paymentInfo.creditCardExpiry.toLocaleDateString()}</p>
                  <p>CVS do Cartão: {paymentInfo.creditCardCVS}</p>
                  <p>Nome do Cliente: {paymentInfo.clientName}</p>
                  <p>CPF do Cliente: {paymentInfo.clienteCpf}</p>
                  <p>Termos Aceitos: {paymentInfo.creditCardTermsAccepted}</p>
                </>
              )}
            </>
          )}
        </div>
      </div>
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
