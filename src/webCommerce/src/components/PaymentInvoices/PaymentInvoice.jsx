

//PaymentInvoice.jsx
import PropTypes from 'prop-types';

function PaymentInvoice({ 
      selectedPlan, 
      userName, 
      email, 
      paymentMethod, 
      bank, 
      account, 
      accountDigit, 
      agency, 
      cpf, 
      name, 
      payPallEmail, 
      payPallPassword, 
      payPallTermsAccepted 
    })
     {
  console.log('Invoice: Plano selecionado:', selectedPlan);
  console.log('Nome do usuário:', userName);
  console.log('Email:', email);
  console.log('Método de pagamento:', paymentMethod);
  
  // Imprime as informações específicas para cada método de pagamento
  switch (paymentMethod) {
    case "Débito Automático":
      console.log('Banco:', bank);
      console.log('Conta:', account);
      console.log('Dígito da conta:', accountDigit);
      console.log('Agência:', agency);
      console.log('CPF:', cpf);
      console.log('Nome:', name);
      break;
      
    case "PayPall":
      console.log('PayPall email:', payPallEmail );
      console.log('PayPall password:', payPallPassword );
      console.log('PayPall terms:', payPallTermsAccepted );
      break;
      
    default:
      // Não é necessário imprimir informações adicionais para outros métodos de pagamento
  }

  return (
    <div className='text-xs text-white'>
      <h1>Invoice: Resumo do Pedido</h1>
      <p className='text-white'>Plano selecionado: {selectedPlan}</p>
      <p>Nome do usuário: {userName}</p>
      <p>Email: {email}</p>
      <p>Método de pagamento: {paymentMethod}</p>
      {paymentMethod === 'Débito Automático' && (
        <>
          <p>Banco: {bank}</p>
          <p>Conta: {account}</p>
          <p>Dígito da conta: {accountDigit}</p>
          <p>Agência: {agency}</p>
          <p>CPF: {cpf}</p>
          <p>Nome: {name}</p>
        </>
      )},
      {paymentMethod === 'PayPall' && (
        <>
          <p>email paypall: {payPallEmail}</p>
          <p>senha paypall: {payPallPassword}</p>
          <p>Termos: {payPallTermsAccepted}</p>
        </>
      )}

    </div>
  );
}

PaymentInvoice.propTypes = {
  selectedPlan: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  paymentMethod: PropTypes.string.isRequired,
  bank: PropTypes.string,
  account: PropTypes.string,
  accountDigit: PropTypes.string,
  agency: PropTypes.string,
  cpf: PropTypes.string,
  name: PropTypes.string,
  payPallEmail: PropTypes.string,
  payPallPassword: PropTypes.string, 
  payPallTermsAccepted: PropTypes.bool, 
};

export default PaymentInvoice;
