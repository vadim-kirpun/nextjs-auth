import { memo } from 'react';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';

import styles from './styles/MainNavigation.module.scss';

const MainNavigation = () => {
  const { data } = useSession();

  return (
    <header className={styles.header}>
      <Link href='/'>
        <a>
          <div className={styles.logo}>Next Auth</div>
        </a>
      </Link>

      <nav>
        <ul>
          {!data && (
            <li>
              <Link href='/auth'>Login</Link>
            </li>
          )}

          {data && (
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
