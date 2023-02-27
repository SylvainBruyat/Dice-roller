import { useState } from 'react';

import type { DiceProps } from '@/utils/constants';

import Button from './Button';

import styles from '@/styles/Dice.module.scss';

import { diceRoll, extractMaxValueFromType } from '@/utils/diceFunction';

export default function Dice({ type }: DiceProps) {
  const [value, setValue] = useState<number | null>(null);
  const maxValue = extractMaxValueFromType(type);

  return (
    <>
      <div className={styles.dice}>{value === null ? <p>{type}</p> : <p>{value}</p>}</div>
      <Button diceRoll={diceRoll} maxValue={maxValue} setValue={setValue} />
    </>
  );
}
