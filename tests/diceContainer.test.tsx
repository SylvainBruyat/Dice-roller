import { cleanup, act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Home from '@/pages';

import { defaultDiceType } from '@/utils/constants';

describe('Tests for DiceContainer component', function () {
  beforeEach(() => render(<Home />));
  afterEach(() => cleanup());

  it('should display a list of dice types', function () {
    const list = screen.getAllByRole('combobox')[0];
    expect(list).toBeTruthy();
  });

  it('should display a dice', function () {
    const diceTextParagraph = screen.getAllByText(defaultDiceType)[1];
    expect(diceTextParagraph).toBeTruthy();
  });

  it('should change the dice type when a new type is selected', async function () {
    const typeSelector = screen.getAllByRole('combobox')[1];
    const typeD12: HTMLOptionElement = screen.getByRole('option', { name: 'D12' });
    await act(async () => {
      await userEvent.selectOptions(typeSelector, typeD12);
    });
    expect(typeD12.selected).toBe(true);
    const diceTextParagraph = screen.getAllByText('D12')[1];
    expect(diceTextParagraph).toBeTruthy();
  });

  it('should display a delete button', function () {
    const deleteButton = screen.getByTitle('Supprimer');
    expect(deleteButton).toBeTruthy();
  });
});

export {};
