import '@/styles/globals.css';
import { NextUIProvider } from '@nextui-org/react';
import { SSRProvider } from 'react-bootstrap';
import { SessionProvider } from 'next-auth/react';
import { AnimatePresence } from 'framer-motion';
export default function App({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={pageProps.session}>
      <SSRProvider>
        {
          <AnimatePresence exitBeforeEnter>
            <NextUIProvider>
              <Component {...pageProps} />
            </NextUIProvider>
          </AnimatePresence>
        }
      </SSRProvider>
    </SessionProvider>
  );
}
