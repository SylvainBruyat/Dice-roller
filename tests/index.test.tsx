import { cleanup, render, screen } from '@testing-library/react';

import Home from '@/pages';

describe('Tests for Home page', function () {
  beforeEach(() => render(<Home />));
  afterEach(() => cleanup());

  it('should display a H1', function () {
    const h1 = screen.getByRole('heading', {
      level: 1,
    });
    expect(h1).toBeTruthy();
  });
});

export {};
