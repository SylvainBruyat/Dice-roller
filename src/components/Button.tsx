import { ButtonProps } from '@/utils/customTypes';

import styles from '@/styles/Button.module.scss';
import { useDice } from '@/utils/DiceContext';

export default function Button({}: ButtonProps) {
  const { handleDiceUpdate } = useDice();

  return (
    <button className={styles['roll-button']} onClick={(evt) => handleDiceUpdate(evt, 'ROLL')}>
      Lancer
    </button>
  );
}
