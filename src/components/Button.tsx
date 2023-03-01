import { MouseEvent } from 'react';

import styles from '@/styles/Button.module.scss';

type ButtonProps = {
  handleDiceUpdate: Function;
};

export default function Button({ handleDiceUpdate }: ButtonProps) {
  return (
    <button
      className={styles['roll-button']}
      onClick={() => {
        handleDiceUpdate();
      }}
    >
      Lancer
    </button>
  );
}
