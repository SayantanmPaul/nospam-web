import '@/styles/globals.css';
import { NextUIProvider } from '@nextui-org/react';
import { SSRProvider } from 'react-bootstrap';
import { SessionProvider } from 'next-auth/react';
export default function App({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={pageProps.session}>
      <SSRProvider>
        {
          <NextUIProvider>
            <Component {...pageProps} />
          </NextUIProvider>
        }
      </SSRProvider>
    </SessionProvider>
  );
}
