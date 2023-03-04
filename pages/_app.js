import '@/styles/globals.css';
import { NextUIProvider } from '@nextui-org/react';
import { SSRProvider } from 'react-bootstrap';
export default function App({ Component, ...props }) {
  return (
    <SSRProvider>
      {
        <NextUIProvider>
          <Component {...props} />
        </NextUIProvider>
      }
    </SSRProvider>
  );
}
