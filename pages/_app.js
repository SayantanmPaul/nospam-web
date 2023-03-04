import '@/styles/globals.css';
import { NextUIProvider } from '@nextui-org/react';
import { SSRProvider } from 'react-bootstrap';
import { SessionProvider } from 'next-auth/react';
export default function App({ Component, ...props }) {
  return (
    <SessionProvider session={props.session}>
      <SSRProvider>
        {
          <NextUIProvider>
            <Component {...props} />
          </NextUIProvider>
        }
      </SSRProvider>
    </SessionProvider>
  );
}
