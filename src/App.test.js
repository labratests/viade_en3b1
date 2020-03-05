import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders routes component', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Sign in/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders prueba mal', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/PruebaNOTexists/i);
  expect(linkElement).toBeInTheDocument();
});
