type diceType = {
  value: string;
  description: string;
};

export const diceTypes: diceType[] = [
  { value: 'D4', description: 'D4 - Dé à 4 faces' },
  { value: 'D6', description: 'D6 - Dé à 6 faces' },
  { value: 'D8', description: 'D8 - Dé à 8 faces' },
  { value: 'D10', description: 'D10 - Dé à 10 faces' },
  { value: 'D12', description: 'D12 - Dé à 12 faces' },
  { value: 'D20', description: 'D20 - Dé à 20 faces' },
  { value: 'D100', description: 'D100 - Dé à 100 faces' },
];
