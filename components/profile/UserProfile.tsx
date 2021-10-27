import { memo } from 'react';

import ProfileForm from './ProfileForm';

import styles from './styles/ProfileForm.module.scss';

const UserProfile = () => (
  <section className={styles.profile}>
    <h1>Your User Profile</h1>
    <ProfileForm />
  </section>
);

export default memo(UserProfile);
