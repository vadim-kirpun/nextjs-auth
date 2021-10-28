import { memo } from 'react';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/client';

import styles from './styles/MainNavigation.module.scss';

const MainNavigation = () => {
  const [session] = useSession();

  return (
    <header className={styles.header}>
      <Link href='/'>
        <a>
          <div className={styles.logo}>Next Auth</div>
        </a>
      </Link>

      <nav>
        <ul>
          {!session && (
            <li>
              <Link href='/auth'>Login</Link>
            </li>
          )}

          {session && (
            <>
              <li>
                <Link href='/profile'>Profile</Link>
              </li>

              <li>
                <button type='button' onClick={() => signOut()}>
                  Logout
                </button>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default memo(MainNavigation);
