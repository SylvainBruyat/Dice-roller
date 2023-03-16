import { cleanup, fireEvent, render, screen } from '@testing-library/react';

import Home from '@/pages';

import { defaultDiceType, defaultDiceValueRangeRegex } from '@/utils/constants';

describe('Tests for Dice component', function () {
  beforeEach(() => render(<Home />));
  afterEach(() => cleanup());

  it('should display a dice of the correct type', function () {
    const diceTextParagraph = screen.getAllByText(defaultDiceType)[1];
    expect(diceTextParagraph).toBeTruthy();
  });

  it('should display a roll button', function () {
    const rollButton = screen.getByRole('button', { name: 'Lancer' });
    expect(rollButton).toBeTruthy();
  });

  it('should return a value within the correct range when the dice is rolled', async function () {
    const rollButton = screen.getByRole('button', { name: 'Lancer' });
    fireEvent.click(rollButton);

    const rolledDice = await screen.findByText(defaultDiceValueRangeRegex, { selector: 'p' });
    expect(rolledDice).toBeTruthy();
    const diceValue = parseInt(rolledDice.textContent || '0', 10);
    expect(diceValue).toBeGreaterThanOrEqual(1);
    expect(diceValue).toBeLessThanOrEqual(6);
  });
});

export {};
