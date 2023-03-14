import { ButtonProps } from '@/utils/customTypes';

import styles from '@/styles/Button.module.scss';

export default function Button({ handleDiceUpdate }: ButtonProps) {
  return (
    <button
      className={styles['roll-button']}
      onClick={(evt) => {
        handleDiceUpdate(evt, 'ROLL');
      }}
    >
      Lancer
    </button>
  );
}
