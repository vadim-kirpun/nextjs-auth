import { memo } from 'react';

import styles from './styles/ProfileForm.module.scss';

const ProfileForm = () => (
  <form className={styles.form}>
    <div className={styles.control}>
      <label htmlFor='new-password'>
        New Password
        <input type='password' id='new-password' />
      </label>
    </div>

    <div className={styles.control}>
      <label htmlFor='old-password'>
        Old Password
        <input type='password' id='old-password' />
      </label>
    </div>

    <div className={styles.action}>
      <button type='submit'>Change Password</button>
    </div>
  </form>
);

export default memo(ProfileForm);
