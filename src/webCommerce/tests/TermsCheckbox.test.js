/* eslint-env jest */

import { render, fireEvent } from '@testing-library/react';
import TermsCheckbox from './TermsCheckbox';

test('renders TermsCheckbox and checks if checkbox is rendered', () => {
  const { getByLabelText } = render(<TermsCheckbox checked={false} onChange={() => {}} />);

  const checkbox = getByLabelText('Eu autorizo o débito direto em conta corrente.');
  expect(checkbox).toBeInTheDocument();
});

test('checks if checkbox change calls the callback function', () => {
  const handleChange = jest.fn();
  const { getByLabelText } = render(<TermsCheckbox checked={false} onChange={handleChange} />);

  fireEvent.click(getByLabelText('Eu autorizo o débito direto em conta corrente.'));
  expect(handleChange).toHaveBeenCalled();
});
