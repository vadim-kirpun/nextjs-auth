import { memo, useCallback } from 'react';

import axios from 'axios';

import ProfileForm from './ProfileForm';

import styles from './styles/UserProfile.module.scss';

const UserProfile = () => {
  const onChangePassword = useCallback(
    async (newPassword: string, oldPassword: string) => {
      try {
        await axios.patch('/api/user/change-password', {
          oldPassword,
          newPassword,
        });
      } catch (error) {
        console.log('error --> ', error);
      }
    },
    []
  );

  return (
    <section className={styles.profile}>
      <h1>Your User Profile</h1>
      <ProfileForm onChangePassword={onChangePassword} />
    </section>
  );
};

export default memo(UserProfile);
