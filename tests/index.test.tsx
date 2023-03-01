import { cleanup, render, screen } from '@testing-library/react';

import Home from '@/pages';

describe('Tests for Home page', function () {
  beforeEach(() => render(<Home />));
  afterEach(() => cleanup());

  it('should display a header', function () {
    const header = screen.getByRole('banner');
    expect(header).toBeTruthy();
  });

  it('should display an add dice button', function () {
    const addButton = screen.getByRole('button', { name: 'Ajouter un D6' });
    expect(addButton).toBeTruthy();
  });
});

export {};
