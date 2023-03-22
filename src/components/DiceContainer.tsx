import { ChangeEvent, MouseEvent } from 'react';

import Dice from './Dice';

import { availableTypesOfDice } from '@/utils/constants';
import { DiceContainerProps } from '@/utils/customTypes';
import { rollDice, extractMaxValueFromType, findClickedDiceIndex } from '@/utils/diceFunctions';

import styles from '@/styles/DiceContainer.module.scss';
import { useDice } from '@/utils/DiceContext';

export default function DiceContainer({ dice }: DiceContainerProps) {
  const { handleDiceUpdate } = useDice();

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
