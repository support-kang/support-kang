import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import App from './App.jsx';

describe('App', () => {
  it('mounts the portfolio document', () => {
    render(<App />);
    expect(document.getElementById('root') || document.body).toBeTruthy();
    expect(screen.getByRole('main')).toBeInTheDocument();
  });
});
