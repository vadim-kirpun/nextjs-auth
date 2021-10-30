import { FormEvent, memo, useRef } from 'react';

import styles from './styles/ProfileForm.module.scss';

type Props = {
  onChangePassword: (newPassword: string, oldPassword: string) => void;
};

const ProfileForm = ({ onChangePassword }: Props) => {
  const newPasswordRef = useRef<HTMLInputElement>(null);
  const oldPasswordRef = useRef<HTMLInputElement>(null);

  const changePassword = async (e: FormEvent) => {
    e.preventDefault();

    if (!newPasswordRef.current || !oldPasswordRef.current) return;

    onChangePassword(
      newPasswordRef.current.value,
      oldPasswordRef.current.value
    );
  };

  return (
    <form className={styles.form} onSubmit={changePassword}>
      <div className={styles.control}>
        <label htmlFor='old-password'>
          Old Password
          <input type='password' id='old-password' ref={oldPasswordRef} />
        </label>
      </div>

      <div className={styles.control}>
        <label htmlFor='new-password'>
          New Password
          <input type='password' id='new-password' ref={newPasswordRef} />
        </label>
      </div>

      <div className={styles.action}>
        <button type='submit'>Change Password</button>
      </div>
    </form>
  );
};

export default memo(ProfileForm);
