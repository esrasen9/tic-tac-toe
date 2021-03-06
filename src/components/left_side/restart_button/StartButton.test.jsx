import React from 'react';
import { render, screen } from '@testing-library/react';
import Provider from '../../../Context';
import StartButton from './StartButton';

test('Restart button have been loaded successfully.', () => {
  render(
    <Provider>
      <StartButton />
    </Provider>,
  );

  const button = screen.getByTestId('restart-btn');
  expect(button).toBeInTheDocument();
  expect(button).toHaveTextContent(/new/i);
  expect(button).toHaveClass('restart-btn');
  expect(button).toBeEnabled();
});
