// PaymentInvoice.jsx

import PropTypes from 'prop-types';

function PaymentInvoice({ selectedPlan, userName, email, paymentMethod, bank, account, accountDigit, agency, cpf, name }) {
  console.log('Plano selecionado:', selectedPlan);
  console.log('Nome do usuário:', userName);
  console.log('Email:', email);
  console.log('Método de pagamento:', paymentMethod);
  console.log('Banco:', bank);
  console.log('Conta:', account);
  console.log('Dígito da conta:', accountDigit);
  console.log('Agência:', agency);
  console.log('CPF:', cpf);
  console.log('Nome:', name);

  return (
    <div>
      <h1>Resumo do Pedido</h1>
      <p>Plano selecionado: {selectedPlan}</p>
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
};

export default PaymentInvoice;
