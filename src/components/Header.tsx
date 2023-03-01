import styles from '@/styles/Header.module.scss';
import DiceSelector from './DiceSelector';

export default function Header() {
  return (
    <header className={styles['header']}>
      <h1 className={styles['header--h1']}>Dice Roller</h1>
    </header>
  );
}
