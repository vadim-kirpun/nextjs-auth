import { memo } from 'react';
import Link from 'next/link';

import classes from './styles/MainNavigation.module.scss';

const MainNavigation = () => (
  <header className={classes.header}>
    <Link href='/'>
      <a>
        <div className={classes.logo}>Next Auth</div>
      </a>
    </Link>

    <nav>
      <ul>
        <li>
          <Link href='/auth'>Login</Link>
        </li>

        <li>
          <Link href='/profile'>Profile</Link>
        </li>

        <li>
          <button type='button'>Logout</button>
        </li>
      </ul>
    </nav>
  </header>
);

export default memo(MainNavigation);
