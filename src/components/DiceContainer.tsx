import { ChangeEvent } from 'react';

import Dice from './Dice';

import { availableTypesOfDice, defaultDiceType } from '@/utils/constants';
import { DiceContainerProps } from '@/utils/customTypes';
import { rollDice, extractMaxValueFromType, findClickedDiceIndex } from '@/utils/diceFunctions';

import styles from '@/styles/DiceContainer.module.scss';

export default function DiceContainer({ dice, dispatch, handleDeleteDice }: DiceContainerProps) {
  //TODO Modifier pour trouver l'index à modifier et l'utiliser pour modifier le bon élément du tableau de dés
  function handleDiceUpdate(evt: ChangeEvent<HTMLSelectElement> | MouseEvent) {
    if (evt.target instanceof HTMLSelectElement) {
      const newDiceType = evt.target.value;
      const indexToChange = findClickedDiceIndex(evt.target);
      dispatch({ type: 'CHANGE-DICE-TYPE', payload: { index: indexToChange, value: newDiceType } });
    } else if (evt.target instanceof HTMLButtonElement) {
      const indexToRoll = findClickedDiceIndex(evt.target);
      const maxValue = extractMaxValueFromType(dice.type);
      const newDiceValue = rollDice(maxValue);
      dispatch({ type: 'ROLL-DICE', payload: { index: indexToRoll, value: newDiceValue } });
    }
  }

  return (
    <article className={styles['dice-container']}>
      <select name='dice-type' defaultValue={dice.type} onChange={(evt) => handleDiceUpdate(evt)}>
        {availableTypesOfDice.map(({ shortName }) => {
          return (
            <option key={shortName} value={shortName}>
              {shortName}
            </option>
          );
        })}
      </select>
      <Dice type={dice.type} value={dice.value} handleDiceUpdate={handleDiceUpdate} />
      <button onClick={(evt) => handleDeleteDice(evt)}>Supprimer</button>
    </article>
  );
}
