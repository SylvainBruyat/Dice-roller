import Head from 'next/head';
import { Inter } from '@next/font/google';

import { MouseEvent, useReducer, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { defaultDice } from '@/utils/constants';
import type { DiceObject, DispatchActions } from '@/utils/customTypes';
import { deleteDice, findClickedDiceIndex } from '@/utils/diceFunctions';

import Header from '@/components/Header';
import DiceContainer from '@/components/DiceContainer';

import styles from '@/styles/Home.module.scss';

const inter = Inter({ subsets: ['latin'] });

function reducer(state: DiceObject[], action: DispatchActions) {
  switch (action.type) {
    case 'ADD-DICE':
      return [...state, defaultDice];

    case 'ROLL-DICE':
      if (typeof action.payload?.value !== 'number') return state;

      const rolledIndex = action.payload.index;
      const rolledDice = { type: state[rolledIndex].type, value: action.payload.value };
      return state.map((dice, index) => (index === rolledIndex ? rolledDice : dice));

    case 'CHANGE-DICE-TYPE':
      if (typeof action.payload?.value !== 'string') return state;

      const modifiedIndex = action.payload.index;
      const modifiedDice = { type: action.payload.value, value: null };
      return state.map((dice, index) => (index === modifiedIndex ? modifiedDice : dice));

    case 'DELETE-DICE':
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
  const [diceArrayRed, dispatch] = useReducer(reducer, [defaultDice]);

  function handleDeleteDice(evt: MouseEvent<HTMLButtonElement>) {
    if (evt.target instanceof HTMLButtonElement) {
      const indexToDelete = findClickedDiceIndex(evt.target);
      if (indexToDelete !== undefined) dispatch({ type: 'DELETE-DICE', payload: { index: indexToDelete } });
    }
  }

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
            {diceArrayRed.map((dice) => (
              /*TODO Sortir la génération de la clé de l'étape de render.
              Le faire avant en intégrant la clé dans chaque dé du state */
              <DiceContainer key={uuidv4()} dice={dice} dispatch={dispatch} handleDeleteDice={handleDeleteDice} />
            ))}
          </section>
        </>
      </main>
    </>
  );
}
