import { cleanup, fireEvent, render, screen } from '@testing-library/react';

import DiceContainer from '@/components/DiceContainer';

describe('Tests for Dice component', function () {
  beforeEach(() => render(<DiceContainer />));
  afterEach(() => cleanup());

  it('should display a dice of the correct type', function () {
    const diceTextParagraph = screen.getAllByText('D6')[1];
    console.log(diceTextParagraph);
    expect(diceTextParagraph).toBeTruthy();
  });

  it('should display a roll button', function () {
    const rollButton = screen.getByRole('button', { name: 'Lancer' });
    expect(rollButton).toBeTruthy();
  });

  it('should return a value within the correct range when the dice is rolled', async function () {
    const diceTextParagraph = screen.getAllByText('D6')[1];
    const rollButton = screen.getByRole('button', { name: 'Lancer' });
    fireEvent.click(rollButton);

    const diceValue = parseInt(diceTextParagraph.textContent || '0', 10);
    expect(await screen.findByText(/^[1-6]$/)).toBeTruthy();
    expect(diceValue).toBeGreaterThanOrEqual(1);
    expect(diceValue).toBeLessThanOrEqual(6);
  });
});

export {};
