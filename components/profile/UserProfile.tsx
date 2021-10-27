import { memo } from 'react';

import ProfileForm from './ProfileForm';

import classes from './styles/ProfileForm.module.scss';

const UserProfile = () => (
  <section className={classes.profile}>
    <h1>Your User Profile</h1>
    <ProfileForm />
  </section>
);

export default memo(UserProfile);
