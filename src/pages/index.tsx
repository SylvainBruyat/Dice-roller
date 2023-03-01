import Head from 'next/head';
import { Inter } from '@next/font/google';

import { useState } from 'react';

import type { DiceProps } from '@/utils/constants';

import DiceContainer from '@/components/DiceContainer';

import styles from '@/styles/Home.module.scss';
import Header from '@/components/Header';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [dice, setDice] = useState<DiceProps[]>([{ type: 'D6', value: null, handleDiceUpdate: function () {} }]);

  function addDice() {
    setDice(() => [...dice, { type: 'D6', value: null, handleDiceUpdate: function () {} }]);
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
          <button onClick={addDice}>Ajouter un D6</button>
          <section className={styles['dice-group']}>
            {dice.map((item, index) => (
              <DiceContainer key={index} /> //TODO Index à modifier. Utiliser uuid ?
            ))}
          </section>
        </>
      </main>
    </>
  );
}
