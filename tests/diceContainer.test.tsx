import DiceContainer from '@/components/DiceContainer';
import { render, screen } from '@testing-library/react';

describe('Tests for DiceContainer component', function () {
  beforeEach(() => render(<DiceContainer />));

  it('should display a list of dice types', function () {
    const list = screen.getByRole('combobox');
    expect(list).toBeTruthy();
  });
});

export {};
