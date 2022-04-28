import { render, screen } from '@testing-library/react';
import App from './App';

test('renders favoritos button', () => {
  render(<App />);
  const linkElement = screen.getByText("Favoritos");
  expect(linkElement).toBeInTheDocument();
});
