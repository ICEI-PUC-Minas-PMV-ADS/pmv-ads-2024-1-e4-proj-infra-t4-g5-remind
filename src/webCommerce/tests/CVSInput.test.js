/* eslint-env jest */

import { render, fireEvent } from '@testing-library/react';
import CVSInput from './CVSInput';

test('renders CVSInput and checks if input field is rendered', () => {
  const { getByLabelText } = render(<CVSInput value="" onChange={() => {}} />);

  const inputField = getByLabelText('CVS');
  expect(inputField).toBeInTheDocument();
});

test('checks if input change calls the callback function', () => {
  const handleChange = jest.fn();
  const { getByLabelText } = render(<CVSInput value="" onChange={handleChange} />);

  fireEvent.change(getByLabelText('CVS'), { target: { value: '123' } });
  expect(handleChange).toHaveBeenCalled();
});
