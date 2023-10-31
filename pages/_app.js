import '../src/app/globals.css';
import Head from 'next/head';
import { ModalProvider } from '@/app/components/hooks/modalContext';
import Script from 'next/script';

export default function App({ Component, pageProps }) {

    return(
      <main>  
        <Head />
        <ModalProvider>
          <Component {...pageProps} />
        </ModalProvider>
      </main>
    );
  }