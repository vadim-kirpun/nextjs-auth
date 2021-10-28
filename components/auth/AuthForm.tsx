import { memo, useRef, useState } from 'react';
import { signIn } from 'next-auth/react';
import type { FormEvent } from 'react';

import axios from 'axios';

import styles from './AuthForm.module.scss';

type ErrorResponse = {
  data: { message: string };
};

const createUser = async (email: string, password: string) => {
  try {
    const { data } = await axios.post('/api/auth/signup', { email, password });
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error((error.response as ErrorResponse).data.message);
    }
  }

  return null;
};

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);

  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();

    if (!emailInputRef.current || !passwordInputRef.current) {
      return;
    }

    const email = emailInputRef.current.value;
    const password = passwordInputRef.current.value;

    if (isLogin) {
      const signInData = {
        email,
        password,
        redirect: false,
      };

      await signIn('credentials', signInData);
    } else {
      const result = await createUser(email, password);
      console.log('%c result =', 'color: lightblue', result);
    }
  };

  return (
    <section className={styles.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>

      <form onSubmit={onSubmit}>
        <div className={styles.control}>
          <label htmlFor='email'>
            Your Email
            <input ref={emailInputRef} type='email' id='email' required />
          </label>
        </div>

        <div className={styles.control}>
          <label htmlFor='password'>
            Your Password
            <input
              ref={passwordInputRef}
              type='password'
              id='password'
              required
            />
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
