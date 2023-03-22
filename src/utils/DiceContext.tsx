import { createContext, PropsWithChildren, useCallback, useContext, useState, useReducer, ChangeEvent, MouseEvent } from 'react';
import { v4 as uuidv4 } from 'uuid';

import type { DiceProps, DiceObject, DispatchActions } from '@/utils/customTypes';
import { defaultDice } from './constants';
import { deleteDice, findClickedDiceIndex, extractMaxValueFromType, rollDice } from './diceFunctions';

type DiceContextProps = {
  diceArray: DiceObject[];
  handleDiceUpdate: (evt: ChangeEvent | MouseEvent, actionType: string) => void;
};

type DiceProviderProps = PropsWithChildren<{
  initialDice?: DiceObject;
}>;

function reducer(state: DiceObject[], action: DispatchActions) {
  switch (action.type) {
    case 'ADD':
      const newDice = { ...defaultDice, id: uuidv4() };
      return [...state, newDice];

    case 'ROLL':
      if (typeof action.payload.value !== 'number') return state;

      const rolledIndex = action.payload.index;
      const rolledDice = { ...state[rolledIndex], value: action.payload.value };
      return state.map((dice, index) => (index === rolledIndex ? rolledDice : dice));

    case 'CHANGE-TYPE':
      if (typeof action.payload.value !== 'string') return state;

      const modifiedIndex = action.payload.index;
      const modifiedDice = { id: state[modifiedIndex].id, type: action.payload.value, value: null };
      return state.map((dice, index) => (index === modifiedIndex ? modifiedDice : dice));

    case 'DELETE':
      if (state.length === 1) return state;
      if (action.payload === undefined) return state;
      const newDiceArray = deleteDice(action.payload.index, state);
      return newDiceArray;

    default:
      console.log(`The action ${action.type} is unknown`);
      return state;
  }
}

const DiceContext = createContext<null | DiceContextProps>(null);

export const DiceProvider = ({ initialDice = defaultDice, children }: DiceProviderProps) => {
  const [diceArray, dispatch] = useReducer(reducer, [initialDice]);

  function handleDiceUpdate(evt: ChangeEvent | MouseEvent, actionType: string) {
    if (!(evt.currentTarget instanceof HTMLSelectElement || evt.currentTarget instanceof HTMLButtonElement)) return;

    const clickedIndex = findClickedDiceIndex(evt.currentTarget);
    if (clickedIndex === -1 && actionType !== 'ADD') return;

    if (actionType === 'ADD') {
      dispatch({ type: actionType, payload: { index: 0, value: 'D6' } });
    } else if (actionType === 'CHANGE-TYPE') {
      const newDiceType = evt.currentTarget.value;
      dispatch({ type: actionType, payload: { index: clickedIndex, value: newDiceType } });
    } else if (actionType === 'ROLL') {
      const maxValue = extractMaxValueFromType(diceArray[clickedIndex].type);
      const newDiceValue = rollDice(maxValue);
      dispatch({ type: actionType, payload: { index: clickedIndex, value: newDiceValue } });
    } else if (actionType === 'DELETE') {
      dispatch({ type: actionType, payload: { index: clickedIndex } });
    }
  }

  return <DiceContext.Provider value={{ diceArray, handleDiceUpdate }}>{children}</DiceContext.Provider>;
};

export const useDice = () => {
  const value = useContext(DiceContext);
  if (value === null) {
    throw new Error("Veuillez entourer ce composant d'un <DiceProvider>");
  }
  return value;
};
