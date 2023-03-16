import { cleanup, act, fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

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

  it('should display a dice container', function () {
    const diceContainer = screen.getByRole('article');
    expect(diceContainer).toBeTruthy();
  });

  it('should add a dice when clicking on the add dice button', function () {
    const initialDiceArray = screen.getAllByRole('article');
    expect(initialDiceArray.length).toBe(1);
    const addButton = screen.getByRole('button', { name: 'Ajouter un D6' });
    fireEvent.click(addButton);
    const newDiceArray = screen.getAllByRole('article');
    expect(newDiceArray.length).toBe(2);
  });

  it('should delete the targeted dice when clicking on a delete button', async function () {
    const addButton = screen.getByRole('button', { name: 'Ajouter un D6' });
    fireEvent.click(addButton);
    const initialDiceArray = screen.getAllByRole('article');
    expect(initialDiceArray.length).toBe(2);

    const typeSelector = screen.getAllByRole('combobox')[2];
    const typeD12 = screen.getAllByRole('option', { name: 'D12' })[1];
    await act(async () => {
      await userEvent.selectOptions(typeSelector, typeD12);
    });

    const deleteButton = screen.getAllByTitle('Supprimer')[0];
    fireEvent.click(deleteButton);
    const newDiceArray = screen.getAllByRole('article');
    expect(newDiceArray.length).toBe(1);
    const diceTextParagraph = screen.getAllByText('D12')[1];
    expect(diceTextParagraph).toBeTruthy();
  });

  it('should not delete the dice when requested if there is only one', function () {
    const deleteButton = screen.getByTitle('Supprimer');
    fireEvent.click(deleteButton);
    const diceContainer = screen.getByRole('article');
    expect(diceContainer).toBeTruthy();
  });
});

export {};
