/* eslint-env jest */
// GoodUntil.test.js

import { render, fireEvent } from '@testing-library/react';
import GoodUntil from './GoodUntil';

test('renders GoodUntil and checks if input field is rendered', () => {
  const { getByLabelText } = render(<GoodUntil value={new Date()} onChange={() => {}} />);

  const inputField = getByLabelText('Validade do Cartão');
  expect(inputField).toBeInTheDocument();
});

test('checks if input change calls the callback function', () => {
  const handleChange = jest.fn();
  const { getByLabelText } = render(<GoodUntil value={new Date()} onChange={handleChange} />);

  fireEvent.change(getByLabelText('Validade do Cartão'), { target: { value: '2022-12' } });
  expect(handleChange).toHaveBeenCalled();
});
