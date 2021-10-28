import type { AppProps } from 'next/app';

import { Layout } from '@components';

import '../styles/globals.css';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => (
  <Layout>
    {/* eslint-disable-next-line react/jsx-props-no-spreading */}
    <Component {...pageProps} />
  </Layout>
);

export default MyApp;
