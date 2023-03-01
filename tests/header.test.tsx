import { cleanup, render, screen } from '@testing-library/react';

import Header from '@/components/Header';

describe('Tests for Home page', function () {
  beforeEach(() => render(<Header />));
  afterEach(() => cleanup());

  it('should display a H1', function () {
    const h1 = screen.getByRole('heading', {
      level: 1,
    });
    expect(h1).toBeTruthy();
  });
});

export {};
