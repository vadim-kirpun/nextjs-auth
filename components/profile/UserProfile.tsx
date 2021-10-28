import { memo, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

import ProfileForm from './ProfileForm';

import styles from './styles/UserProfile.module.scss';

const UserProfile = () => {
  const router = useRouter();
  const { status } = useSession();

  useEffect(() => {
    if (status === 'unauthenticated') router.push('/auth');
  }, [router, status]);

  if (status === 'loading')
    return <section className={styles.profile}>Loading...</section>;

  return (
    <section className={styles.profile}>
      <h1>Your User Profile</h1>
      <ProfileForm />
    </section>
  );
};

export default memo(UserProfile);
