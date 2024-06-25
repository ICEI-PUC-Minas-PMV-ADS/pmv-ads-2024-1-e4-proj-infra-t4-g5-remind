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
        console.log('Invoice Data: Pagamento', purchaseData.paymentMethod);

        clearInterval(checkInterval);

        handlePurchaseProcess();
      } else {
        setLoading(true);
        console.log('Informações incompletas. Aguardando mais dados...');
      }
    };

    const checkInterval = setInterval(checkData, 1000);

    return () => clearInterval(checkInterval);
  }, [purchaseData]);

  const handlePurchaseProcess = async () => {
    try {
      const purchaseResponse = await createPurchase();
      await createUserDbRemind(purchaseResponse);
      await createPayment(purchaseResponse._id);
    } catch (error) {
      console.error('Erro no processo de compra:', error);
    }
  };

  const createPurchase = async () => {
    const purchase = {
      // Plan Data
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
      // Terms
      termsAccepted: purchaseData.termsAccepted,
    };

    try {
      const response = await axios.post('https://web-com-client-backend.vercel.app/purchase', purchase, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log('Purchase criada com sucesso:', response.data);
      return response.data;
    } catch (error) {
      console.error('Erro ao criar purchase:', error);
      throw error;
    }
  };

  const createUserDbRemind = async (purchaseData) => {
    const token = import.meta.env.VITE_TOKEN;

    /* console.log('Token:', token);
    console.log('Dados de compra:', purchaseData); */

    try {
      const postData = {
        nome: purchaseData.userName,
        email: purchaseData.email,
        senha: purchaseData.password,
        cargo: 'PMO',
        setor: 'Account Ownner',
        permissao: 1
      };

      console.log('Dados do POST:', postData);

      const response = await axios.post('https://129.148.47.221:8000/users/criar', postData, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });

      console.log('Master User criado com sucesso no DB Remind:', response);
    } catch (error) {
      console.error('Erro ao criar usuário no DB Remind:', error);
      throw error;
    }
  };

  const createPayment = async (purchaseId) => {
    const paymentInfo = getPaymentInfo();

    const payment = {
      payment_id: new mongoose.Types.ObjectId().toString(),
      paymentMethod: purchaseData.paymentMethod,
      ...paymentInfo,
    };

    try {
      const response = await axios.post('https://web-com-client-backend.vercel.app/payment', payment, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log('Payment criado com sucesso:', response.data);
      await createStatus(purchaseId, response.data._id);
    } catch (error) {
      console.error('Erro ao criar payment:', error);
      throw error;
    }
  };

  const createStatus = async (purchaseId, paymentId) => {
    const statusData = {
      purchase_id: purchaseId,
      payment_id: paymentId,
    };

    try {
      const response = await axios.post('https://web-com-client-backend.vercel.app/subscription-status', statusData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log('SubscriptionStatus criado com sucesso:', response.data);
    } catch (error) {
      console.error('Erro ao criar subscription status:', error);
      throw error;
    }
  };

  if (loading) {
    console.log('Renderizando Loading...');
    return <div className='mt-4 buynow-card-text-sm'>Loading...</div>;
  }

  console.log('Renderizando componente corretamente...');

  const paymentInfo = getPaymentInfo();

  return (
    <div className='screen-max-width '>
      <div className='invoice-container mb-6'>
        <div className='invoice-header'>
          <h1 className='invoice-title'>Resumo do Plano</h1>
          <p className='invoice-subtitle'>Informações da Compra</p>
        </div>
        <div className='invoice-body min-h-80'>
          <div className='invoice-section '>
            <h2 className='invoice-section-title'>Dados do Plano</h2>
            <div className='leading-7'>
              <p><span className='invoice-label'>Plano selecionado:</span><br/> {purchaseData.selectedPlan.title}</p>
              <p><span className='invoice-label'>Valor:</span> {purchaseData.selectedPlan.price} {purchaseData.selectedPlan.currency}</p>
              <p><span className='invoice-label'>Frequência:</span> {purchaseData.selectedPlan.frequency}</p>
            </div>
          </div>
          <div className='invoice-section'>
            <h2 className='invoice-section-title'>Dados do Usuário</h2>
            <p><span className='invoice-label'>Dados do Administrador da conta. </span></p> <br/>
            <div className='leading-7'>
              <p><span className='invoice-label'>Nome do usuário:</span> {purchaseData.userName}</p>
              <p><span className='invoice-label'>Email:</span> {purchaseData.email}</p>
              <p><span className='invoice-label'>Senha:</span> {purchaseData.password}</p>
              <div className="my-8">
                <div>
                  <p className="font-semibold text-gray text-xs">
                    Acesse o site {' '}
                    <span className="underline text-purple-400 text-sm">
                     remind.com.br  {' '}
                    </span>
                     com estes dados de login para criar os times e administrar as equipes.
                  </p>
                  <p className="font-semibold text-gray text-xs">
                    Ou ligue grátis 24hs 0800-555-2024 para suporte da nossa equipe.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='invoice-section'>
            <h2 className='invoice-section-title'>Dados do Pagamento</h2>
            <div className='leading-7'>
              <p><span className='invoice-label'>Método de Pagamento:</span> {purchaseData.paymentMethod}</p>
              {paymentInfo && (
                <>
                  {purchaseData.paymentMethod === 'Débito Automático' && (
                    <>
                      <p><span className='invoice-label'>Nome do Banco:</span> {paymentInfo.bankName}</p>
                      <p><span className='invoice-label'>Número da Conta:</span> {paymentInfo.bankAccountNumber}</p>
                      <p><span className='invoice-label'>Número do Banco:</span> {paymentInfo.bankRoutingNumber}</p>
                      <p><span className='invoice-label'>Número da Agência:</span> {paymentInfo.bankAccountAgencyNumber}</p>
                      <p><span className='invoice-label'>Nome do Cliente:</span> {paymentInfo.clientName}</p>
                      <p><span className='invoice-label'>CPF do Cliente:</span> {paymentInfo.clienteCpf}</p>
                      <p><span className='invoice-label'>Renovação automática:</span> <span className='text-green-600'> Ativa</span></p>
                    </>
                  )}
                  {purchaseData.paymentMethod === 'PayPall' && (
                    <>
                      <p><span className='invoice-label'>PayPall Email:</span> {paymentInfo.payPallEmail}</p>
                      <p><span className='invoice-label'>Renovação automática:</span> <span className='text-green-600'> Ativa</span></p>
                    </>
                  )}
                  {purchaseData.paymentMethod === 'Pague com Amazon' && (
                    <>
                      <p><span className='invoice-label'>Amazon Email:</span> {paymentInfo.amazonEmail}</p>
                      <p><span className='invoice-label'>Renovação automática:</span> <span className='text-green-600'> Ativa</span></p>
                    </>
                  )}
                  {purchaseData.paymentMethod === 'Cartão de Crédito' && (
                    <>
                      <p><span className='invoice-label'>Marca do Cartão:</span> {paymentInfo.creditCardBrand}</p>
                      <p><span className='invoice-label'>Número do Cartão:</span>  **** **** **** {paymentInfo.creditCardNumber.slice(-4)}</p>
                      <p><span className='invoice-label'>Nome do Cliente:</span> {paymentInfo.clientName}</p>
                      <p><span className='invoice-label'>CPF do Cliente:</span> {paymentInfo.clienteCpf}</p>
                      <p><span className='invoice-label'>Renovação automática:</span> <span className='text-green-600'> Ativa</span></p>
                    </>
                  )}
                </>
              )}
            </div>
          </div>
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
  clientName: PropTypes.string,
  clienteCpf: PropTypes.string,
  creditCardTermsAccepted: PropTypes.bool,
};

export default PaymentInvoice;
