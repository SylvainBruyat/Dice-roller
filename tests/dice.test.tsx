import { cleanup, fireEvent, render, screen } from '@testing-library/react';

import DiceContainer from '@/components/DiceContainer';

describe('Tests for Dice component', function () {
  beforeEach(() => render(<DiceContainer />));
  afterEach(() => cleanup());

  it('should display a dice of the correct type', function () {
    const diceText = screen.getByText('D12');
    expect(diceText).toBeTruthy();
  });

  it('should display a roll button', function () {
    const rollButton = screen.getByRole('button', { name: 'Lancer' });
    expect(rollButton).toBeTruthy();
  });

  it('should return a value within the correct range when the dice is rolled', async function () {
    const diceText = screen.getByText('D12');
    const rollButton = screen.getByRole('button', { name: 'Lancer' });
    fireEvent.click(rollButton);
    setTimeout(() => {
      const diceValue = parseInt(diceText.textContent || '0', 10);
      expect(diceValue).toBeGreaterThanOrEqual(1);
      expect(diceValue).toBeLessThanOrEqual(12);
    }, 0);
  });
});

export {};
