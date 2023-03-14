import { DiceObject } from './customTypes';

export function rollDice(maxValue: number): number {
  const newDiceValue: number = Math.ceil(Math.random() * maxValue);
  return newDiceValue;
}

export function extractMaxValueFromType(type: string): number {
  const maxValue = parseInt(type.replace('D', ''), 10);
  return maxValue;
}

export function deleteDice(indexToDelete: number, diceArray: DiceObject[]): DiceObject[] {
  return diceArray.filter((dice, index) => index !== indexToDelete);
}

export function findClickedDiceIndex(clickedElement: HTMLElement): number {
  const diceSectionElement = clickedElement.closest('section');
  if (!diceSectionElement) return -1;
  const diceContainerArray = Object.values(diceSectionElement.children);
  const diceContainerElement = clickedElement.closest('article');
  if (!diceContainerElement) return -1;
  const indexToDelete: number = diceContainerArray.findIndex((element) => element === diceContainerElement);
  return indexToDelete;
}
