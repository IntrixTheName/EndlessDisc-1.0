import { render, screen } from '@testing-library/react';
import App from './App';

test('Renders toolbar', () => {
  render(<App />);
  const toolbarElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
