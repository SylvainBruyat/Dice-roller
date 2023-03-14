import { ChangeEvent, MouseEvent } from 'react';

import Dice from './Dice';

import { availableTypesOfDice } from '@/utils/constants';
import { DiceContainerProps } from '@/utils/customTypes';
import { rollDice, extractMaxValueFromType, findClickedDiceIndex } from '@/utils/diceFunctions';

import styles from '@/styles/DiceContainer.module.scss';

/* TODO Finir de refactoriser la gestion des évènements dans cette fonction
 * en utilisant le paramètre actionType pour choisir quels arguments passer à dispatch()
 * Eventuellement modifier findClickedDiceIndex pour passer evt.currentTarget (= DiceContainer) en paramètre */
export default function DiceContainer({ dice, dispatch }: DiceContainerProps) {
  function handleDiceUpdate(evt: ChangeEvent | MouseEvent, actionType: string) {
    if (!(evt.currentTarget instanceof HTMLSelectElement || evt.currentTarget instanceof HTMLButtonElement)) {
      return;
    }

    const clickedIndex = findClickedDiceIndex(evt.currentTarget);
    if (clickedIndex === -1) return;

    if (actionType === 'CHANGE-TYPE') {
      const newDiceType = evt.currentTarget.value;
      dispatch({ type: actionType, payload: { index: clickedIndex, value: newDiceType } });
    } else if (actionType === 'ROLL') {
      const maxValue = extractMaxValueFromType(dice.type);
      const newDiceValue = rollDice(maxValue);
      dispatch({ type: actionType, payload: { index: clickedIndex, value: newDiceValue } });
    } else if (actionType === 'DELETE') {
      dispatch({ type: actionType, payload: { index: clickedIndex } });
    }
  }

  return (
    <article className={styles['dice-container']} data-id={dice.id}>
      <select name='dice-type' defaultValue={dice.type} onChange={(evt) => handleDiceUpdate(evt, 'CHANGE-TYPE')}>
        {availableTypesOfDice.map(({ shortName }) => {
          return (
            <option key={shortName} value={shortName}>
              {shortName}
            </option>
          );
        })}
      </select>
      <Dice type={dice.type} value={dice.value} handleDiceUpdate={handleDiceUpdate} />
      <button className={styles['dice-container--delete-button']} title='Supprimer' onClick={(evt) => handleDiceUpdate(evt, 'DELETE')}>
        <i className='fa-solid fa-circle-xmark'></i>
      </button>
    </article>
  );
}
