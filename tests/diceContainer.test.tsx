import { render, screen } from '@testing-library/react';
import { v4 as uuidv4 } from 'uuid';

import DiceContainer from '@/components/DiceContainer';

import { defaultDiceType } from '@/utils/constants';

function deleteDice(id: string) {
  console.log(`Dé ${id} supprimé`);
}

describe('Tests for DiceContainer component', function () {
  beforeEach(() => render(<DiceContainer key={uuidv4()} dice={{ type: 'D6', value: null }} dispatch={() => {}} handleDeleteDice={deleteDice} />));

  it('should display a list of dice types', function () {
    const list = screen.getByRole('combobox');
    expect(list).toBeTruthy();
  });

  it('should display a dice', function () {
    const diceTextParagraph = screen.getAllByText(defaultDiceType)[1];
    expect(diceTextParagraph).toBeTruthy();
  });

  it('should display a delete button', function () {
    const deleteButton = screen.getByRole('button', { name: 'Supprimer' });
    expect(deleteButton).toBeTruthy();
  });
});

export {};
