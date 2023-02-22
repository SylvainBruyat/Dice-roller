export function diceRoll(maxValue: number): number {
  const newDiceValue: number = Math.ceil(Math.random() * maxValue);
  return newDiceValue;
}

export function extractMaxValueFromType(type: string): number {
  const maxValue = parseInt(type.replace('D', ''), 10);
  return maxValue;
}
