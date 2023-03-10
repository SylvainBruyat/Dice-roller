import Head from 'next/head';
import Script from 'next/script';
import { Inter } from '@next/font/google';

import { useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { defaultDice } from '@/utils/constants';
import type { DiceObject, DispatchActions } from '@/utils/customTypes';
import { deleteDice } from '@/utils/diceFunctions';

import Header from '@/components/Header';
import DiceContainer from '@/components/DiceContainer';

import styles from '@/styles/Home.module.scss';

const inter = Inter({ subsets: ['latin'] });

function reducer(state: DiceObject[], action: DispatchActions) {
  switch (action.type) {
    case 'ADD-DICE':
      const newDice = { ...defaultDice, id: uuidv4() };
      return [...state, newDice];

    case 'ROLL-DICE':
      if (typeof action.payload?.value !== 'number') return state;

      const rolledIndex = action.payload.index;
      const rolledDice = { ...state[rolledIndex], value: action.payload.value };
      return state.map((dice, index) => (index === rolledIndex ? rolledDice : dice));

    case 'CHANGE-DICE-TYPE':
      if (typeof action.payload?.value !== 'string') return state;

      const modifiedIndex = action.payload.index;
      const modifiedDice = { id: state[modifiedIndex].id, type: action.payload.value, value: null };
      return state.map((dice, index) => (index === modifiedIndex ? modifiedDice : dice));

    case 'DELETE-DICE':
      console.log('DELETE-DICE');
      if (state.length === 1) return state;
      if (action.payload === undefined) return state;
      const newDiceArray = deleteDice(action.payload.index, state);
      return newDiceArray;

    default:
      console.log(`The action ${action.type} is unknown`);
      return state;
  }
}

export default function Home() {
  const [diceArray, dispatch] = useReducer(reducer, [defaultDice]);

  return (
    <>
      <Head>
        <title>Dice Roller</title>
        <meta name='description' content='Un lanceur de dés complet, flexible et facile à utiliser' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <main className={styles.main}>
        <>
          <button onClick={() => dispatch({ type: 'ADD-DICE' })}>Ajouter un D6</button>
          <section className={styles['dice-group']}>
            {diceArray.map((dice) => (
              <DiceContainer key={dice.id} dice={dice} dispatch={dispatch} />
            ))}
          </section>
        </>
        <Script src='https://kit.fontawesome.com/583ad7970e.js' crossOrigin='anonymous' />
      </main>
    </>
  );
}
