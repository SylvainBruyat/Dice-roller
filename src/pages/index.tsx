import Head from 'next/head';
import Script from 'next/script';
import { Inter } from '@next/font/google';

import { useState, useEffect } from 'react';

import Header from '@/components/Header';
import { useDice } from '@/utils/DiceContext';
import DiceContainer from '@/components/DiceContainer';

import styles from '@/styles/Home.module.scss';

const inter = Inter({ subsets: ['latin'] });

/*TODO Utiliser dataset.id pour récupérer l'ID du dé cliqué au lieu de son index ***
 * et utiliser cet ID pour trouver le dé dans le tableau **************************/

export default function Home() {
  const { diceArray, handleDiceUpdate } = useDice();

  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    setHydrated(true);
  }, []);
  if (!hydrated) {
    return null;
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
        <button onClick={(evt) => handleDiceUpdate(evt, 'ADD')}>Ajouter un D6</button>
        <section className={styles['dice-group']}>
          {diceArray.map((dice) => (
            <DiceContainer key={dice.id} dice={dice} handleDiceUpdate={handleDiceUpdate} />
          ))}
        </section>
        <button onClick={(evt) => handleDiceUpdate(evt, 'ROLL-ALL')}>Lancer tout</button>
        <Script src='https://kit.fontawesome.com/583ad7970e.js' crossOrigin='anonymous' />
      </main>
    </>
  );
}
