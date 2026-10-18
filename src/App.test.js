import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

// Smoke test: App renders inside a router and shows the primary nav
test('renders the primary navigation', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  const navElement = screen.getByRole('navigation', { name: /primary/i });
  expect(navElement).toBeInTheDocument();
});
