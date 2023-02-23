import Dice from './Dice';
import { diceTypes } from '@/utils/constants';
import { ChangeEvent, ReactEventHandler, useState } from 'react';

const defaultDiceType: string = 'D6';

export default function DiceContainer() {
  const [diceType, setDiceType] = useState<string>(defaultDiceType);

  function handleTypeSelection(evt: ChangeEvent<HTMLSelectElement>) {
    const newDiceType = evt.target.value;
    setDiceType(newDiceType);
  }

  return (
    <>
      <select name='dice-type' defaultValue={'D6'} onChange={(evt) => handleTypeSelection(evt)}>
        {diceTypes.map(({ value }) => {
          return (
            <option key={value} value={value}>
              {value}
            </option>
          );
        })}
      </select>
      <Dice type={diceType} />
    </>
  );
}
