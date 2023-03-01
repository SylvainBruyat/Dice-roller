import { useState } from 'react';

import type { DiceProps } from '@/utils/constants';

import Button from './Button';

import styles from '@/styles/Dice.module.scss';

export default function Dice({ type, value, handleDiceUpdate }: DiceProps) {
  return (
    <>
      <div className={styles.dice}>{value === null ? <p>{type}</p> : <p>{value}</p>}</div>
      <Button handleDiceUpdate={handleDiceUpdate} />
    </>
  );
}
