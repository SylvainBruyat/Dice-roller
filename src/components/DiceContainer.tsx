import { ChangeEvent, ReactEventHandler, useState } from 'react';

import Dice from './Dice';
import { availableTypesOfDice, defaultDiceType } from '@/utils/constants';

export default function DiceContainer() {
  const [diceType, setDiceType] = useState<string>(defaultDiceType);

  function handleTypeSelection(evt: ChangeEvent<HTMLSelectElement>) {
    const newDiceType = evt.target.value;
    setDiceType(newDiceType);
  }

  return (
    <div>
      <select name='dice-type' defaultValue={'D6'} onChange={(evt) => handleTypeSelection(evt)}>
        {availableTypesOfDice.map(({ shortName }) => {
          return (
            <option key={shortName} value={shortName}>
              {shortName}
            </option>
          );
        })}
      </select>
      <Dice type={diceType} />
    </div>
  );
}
