import { memo, useState } from 'react';

import styles from './AuthForm.module.scss';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  return (
    <section className={styles.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>

      <form>
        <div className={styles.control}>
          <label htmlFor='email'>
            Your Email
            <input type='email' id='email' required />
          </label>
        </div>

        <div className={styles.control}>
          <label htmlFor='password'>
            Your Password
            <input type='password' id='password' required />
          </label>
        </div>

        <div className={styles.actions}>
          <button type='submit'>{isLogin ? 'Login' : 'Create Account'}</button>

          <button
            type='button'
            className={styles.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default memo(AuthForm);
