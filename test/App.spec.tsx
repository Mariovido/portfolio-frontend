import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import App from '../src/App';

// TODO - DO TESTS
describe('App', () => {
  it('Renders App', () => {
    const { container } = render(<App />);
    const divApp = container.querySelector('div.app');
    expect(divApp).toBeVisible();
  });
});
