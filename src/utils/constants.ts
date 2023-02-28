export type DiceProps = {
  type: string;
  value: number | null;
  setValue: Function;
};

type TypeOfDice = {
  shortName: string;
  description: string;
};

export const availableTypesOfDice: TypeOfDice[] = [
  { shortName: 'D4', description: 'D4 - Dé à 4 faces' },
  { shortName: 'D6', description: 'D6 - Dé à 6 faces' },
  { shortName: 'D8', description: 'D8 - Dé à 8 faces' },
  { shortName: 'D10', description: 'D10 - Dé à 10 faces' },
  { shortName: 'D12', description: 'D12 - Dé à 12 faces' },
  { shortName: 'D20', description: 'D20 - Dé à 20 faces' },
  { shortName: 'D100', description: 'D100 - Dé à 100 faces' },
];

export const defaultDiceType: string = 'D6';
