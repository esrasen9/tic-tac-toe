import React from 'react';
import { render, screen } from '@testing-library/react';
import Provider from '../../../Context';
import Header from './Header';

test('Header component have been loaded successfully.', () => {
  render(
    <Provider>
      <Header />
    </Provider>,
  );

  const tic = screen.getByTestId('header-text-1');
  expect(tic).toBeInTheDocument();
  expect(tic).toHaveClass('header-text');
  expect(tic).toHaveTextContent('Tic');

  const tac = screen.getByTestId('header-text-2');
  expect(tac).toBeInTheDocument();
  expect(tac).toHaveClass('header-text');
  expect(tac).toHaveTextContent('Tac');

  const toe = screen.getByTestId('header-text-3');
  expect(toe).toBeInTheDocument();
  expect(toe).toHaveClass('header-text');
  expect(toe).toHaveTextContent('Toe!');
});
