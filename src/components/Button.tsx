import { MouseEvent } from 'react';

import styles from '@/styles/Button.module.scss';

type ButtonProps = {
  diceRoll: Function;
  maxValue: number;
  setValue: Function;
};

export default function Button({ diceRoll, maxValue, setValue }: ButtonProps) {
  function handleClick(evt: MouseEvent) {
    evt.preventDefault();
    const newDiceValue = diceRoll(maxValue);
    setValue(newDiceValue);
  }

  return (
    <button className={styles['roll-button']} onClick={handleClick}>
      Lancer
    </button>
  );
}
