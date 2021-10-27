import { memo } from 'react';
import type { PropsWithChildren } from 'react';

import MainNavigation from './MainNavigation';

const Layout = ({ children }: PropsWithChildren<unknown>) => (
  <>
    <MainNavigation />
    <main>{children}</main>
  </>
);

export default memo(Layout);
