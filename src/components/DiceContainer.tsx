import { ChangeEvent, ReactEventHandler, useState } from 'react';

import Dice from './Dice';
import { DiceObject, availableTypesOfDice, defaultDiceType, defaultDice } from '@/utils/constants';
import { diceRoll, extractMaxValueFromType } from '@/utils/diceFunction';

export default function DiceContainer() {
  const [dice, setDice] = useState<DiceObject>(defaultDice);

  function handleDiceUpdate(evt: ChangeEvent<HTMLSelectElement> | MouseEvent) {
    if (evt?.target instanceof HTMLSelectElement) {
      const newDiceType = evt.target.value;
      setDice({ type: newDiceType, value: null });
    } else {
      const maxValue = extractMaxValueFromType(dice.type);
      const newDiceValue = diceRoll(maxValue);
      setDice({ ...dice, value: newDiceValue });
    }
  }

  return (
    <div>
      <select name='dice-type' defaultValue={'D6'} onChange={(evt) => handleDiceUpdate(evt)}>
        {availableTypesOfDice.map(({ shortName }) => {
          return (
            <option key={shortName} value={shortName}>
              {shortName}
            </option>
          );
        })}
      </select>
      <Dice type={dice.type} value={dice.value} handleDiceUpdate={handleDiceUpdate} />
    </div>
  );
}
