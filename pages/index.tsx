import { getSession } from 'next-auth/react';
import type { GetServerSideProps } from 'next';

import { StartingPageContent } from '@components';

const Home = (): JSX.Element => <StartingPageContent />;

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req });

  if (!session) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false,
      },
    };
  }

  return { props: {} };
};

export default Home;
