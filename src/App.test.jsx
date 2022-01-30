import { render, screen } from '@testing-library/react';
import App from './App';
import Provider from "./Context";

test('Renders app components correctly', () => {
  render(
      <Provider>
        <App />
      </Provider>
  );
  const leftSide = screen.getByTestId("left");
  expect(leftSide).toBeInTheDocument();

  const rightSide = screen.getByTestId("right");
  expect(rightSide).toBeInTheDocument();
});
