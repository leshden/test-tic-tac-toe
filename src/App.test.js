import { render, screen } from '@testing-library/react';
import App from './App';

test('render App Game', () => {
  render(<App />);
  const linkElement = screen.getByRole('game');
  expect(linkElement).toBeInTheDocument();
});
