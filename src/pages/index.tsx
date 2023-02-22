import Head from 'next/head';
import { Inter } from '@next/font/google';

import Dice from '@/components/Dice';
import DiceContainer from '@/components/DiceContainer';

import styles from '@/styles/Home.module.scss';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Dice Roller</title>
        <meta name='description' content="Un lanceur de dés complet, facile d'utilisation et entièrement configurable" />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles.main}>
        <h1>Dice Roller</h1>
        <DiceContainer />
      </main>
    </>
  );
}
