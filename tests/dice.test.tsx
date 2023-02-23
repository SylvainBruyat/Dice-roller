import { cleanup, fireEvent, render, screen } from '@testing-library/react';

import Dice from '@/components/Dice';

describe('Tests for Dice component', function () {
  beforeEach(() => render(<Dice type='D12' />));
  afterEach(() => cleanup());

  it('should display a dice of the correct type', function () {
    const diceText = screen.getByText('D12');
    expect(diceText.textContent).toBe('D12');
  });

  it('should display a roll button', function () {
    const button = screen.getByRole('button');
    expect(button).toBeTruthy();
    expect(button.textContent).toBe('Lancer');
  });

  it('should return a value within the correct range', function () {
    const diceText = screen.getByText('D12');
    const rollButton = screen.getByRole('button');
    fireEvent.click(rollButton);
    const diceValue = parseInt(diceText.textContent || '0', 10);
    expect(diceValue).toBeGreaterThanOrEqual(1);
    expect(diceValue).toBeLessThanOrEqual(12);
  });
});

export {};
