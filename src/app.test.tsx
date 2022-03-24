import { test, render, screen, expect } from 'vitest';
import { App } from './App';

test.skip('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/choose your egroup/i);
  expect(linkElement).toBeDefined();
});
