import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';

import { Layout } from '@components';

import '../styles/globals.css';

const MyApp = ({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps): JSX.Element => (
  <SessionProvider session={session}>
    <Layout>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </Layout>
  </SessionProvider>
);

export default MyApp;
