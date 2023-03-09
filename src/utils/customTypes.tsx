export type TypeOfDice = {
  shortName: string;
  description: string;
};

export type DiceObject = {
  id: string;
  type: string;
  value: number | null;
};

/* TODO Revoir ce type car on peut passer n'importe quoi en paramètre de la fonction dispatch
 * Vérifier aussi si le problème n'est pas au niveau du passage de dispatch en props et comment les props sont typées */
export type DispatchActions = {
  type: string;
  payload?: {
    index: number;
    value?: number | string;
  };
};

export type DiceProps = {
  type: string;
  value: number | null;
  handleDiceUpdate: Function;
};

export type DiceContainerProps = {
  key: string;
  dice: DiceObject;
  dispatch: Function;
  handleDeleteDice: Function;
};

export type ButtonProps = {
  handleDiceUpdate: Function;
};
