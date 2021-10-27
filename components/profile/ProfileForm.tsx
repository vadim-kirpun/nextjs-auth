import { memo } from 'react';

import classes from './styles/ProfileForm.module.scss';

const ProfileForm = () => (
  <form className={classes.form}>
    <div className={classes.control}>
      <label htmlFor='new-password'>
        New Password
        <input type='password' id='new-password' />
      </label>
    </div>

    <div className={classes.control}>
      <label htmlFor='old-password'>
        Old Password
        <input type='password' id='old-password' />
      </label>
    </div>

    <div className={classes.action}>
      <button type='submit'>Change Password</button>
    </div>
  </form>
);

export default memo(ProfileForm);
