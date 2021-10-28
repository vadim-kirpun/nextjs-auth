import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/react';

import { AuthForm } from '@components';

const AuthPage = (): JSX.Element => <AuthForm />;

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req });

  if (session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return { props: {} };
};

export default AuthPage;
