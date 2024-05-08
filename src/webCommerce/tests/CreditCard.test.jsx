
/* eslint-env jest */

import { render, fireEvent, waitFor } from '@testing-library/react';
import CreditCard from './CreditCard';

test('renders CreditCard and its child components', async () => {
  const handleButtonClick = jest.fn();
  const { getByLabelText, getByText } = render(<CreditCard onButtonClick={handleButtonClick} isLoading={false} />);


  const cardNumberInput = getByLabelText(/Número do Cartão/i);
  const cvsInput = getByLabelText(/CVS/i);
  const cpfInput = getByLabelText(/CPF/i);
  const nameInput = getByLabelText(/Nome Completo/i);
  const payButton = getByText(/Pagar/i);


  fireEvent.change(cardNumberInput, { target: { value: '4111111111111111' } });
  fireEvent.change(cvsInput, { target: { value: '123' } });
  fireEvent.change(cpfInput, { target: { value: '000.000.000-00' } });
  fireEvent.change(nameInput, { target: { value: 'John Doe' } });


  fireEvent.click(payButton);


  await waitFor(() => {
    expect(handleButtonClick).toHaveBeenCalled();
  });
});
