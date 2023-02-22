import { cleanup, render, screen } from '@testing-library/react';

import Dice from '@/components/Dice';

describe('Tests for Dice component', function () {
  beforeEach(() => render(<Dice type='D12' />));
  afterEach(() => cleanup());

  it('should display a dice of the correct type', function () {
    const dice = screen.getByText('D12');
    expect(dice).toBeTruthy();
  });

  it('should display a roll button', function () {
    const button = screen.getByRole('button');
    const buttonText = button.textContent;
    expect(button).toBeTruthy();
    expect(buttonText).toBe('Lancer');
  });

  it.skip('should return a value within the correct range', function () {});
});

export {};
