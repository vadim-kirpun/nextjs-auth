import { getSession } from 'next-auth/react';
import type { GetServerSideProps } from 'next';

import { UserProfile } from '@components';

const ProfilePage = (): JSX.Element => <UserProfile />;

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

  return { props: { session } };
};

export default ProfilePage;
