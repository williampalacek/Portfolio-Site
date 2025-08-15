import { render, screen } from '@testing-library/react';
import EngineeringTrivia from './components/EngineeringTrivia';

test('renders engineering trivia button', () => {
  render(<EngineeringTrivia />);
  const buttonElement = screen.getByText(/tell me more/i);
  expect(buttonElement).toBeInTheDocument();
});
