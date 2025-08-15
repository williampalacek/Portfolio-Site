import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio header', () => {
  render(<App />);
  const linkElement = screen.getByText(/Email Me/i);
  expect(linkElement).toBeInTheDocument();
});
