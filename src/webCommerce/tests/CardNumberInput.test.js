/* eslint-env jest */

import { render, fireEvent } from '@testing-library/react';
import CardNumberInput from './CardNumberInput';

test('renders CardNumberInput and checks if input field is rendered', () => {
  const { getByLabelText } = render(<CardNumberInput value="" onChange={() => {}} />);

  const inputField = getByLabelText('Número do Cartão');
  expect(inputField).toBeInTheDocument();
});

test('checks if input change calls the callback function', () => {
  const handleChange = jest.fn();
  const { getByLabelText } = render(<CardNumberInput value="" onChange={handleChange} />);

  fireEvent.change(getByLabelText('Número do Cartão'), { target: { value: '1234 5678 9012 3456' } });
  expect(handleChange).toHaveBeenCalled();
});
