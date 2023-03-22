import '@/styles/normalize.css';
import '@/styles/globals.scss';

import type { AppProps } from 'next/app';
import { DiceProvider } from '@/utils/DiceContext';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <DiceProvider>
      <Component {...pageProps} />;
    </DiceProvider>
  );
}
