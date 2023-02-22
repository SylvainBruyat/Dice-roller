type ButtonProps = {
  diceRoll: Function;
  maxValue: number;
  setValue: Function;
};

export default function Button({ diceRoll, maxValue, setValue }: ButtonProps) {
  function handleClick() {
    const newDiceValue = diceRoll(maxValue);
    setValue(newDiceValue);
  }

  return <button onClick={handleClick}>Lancer</button>;
}
