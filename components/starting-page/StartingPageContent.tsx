import { memo } from 'react';

import classes from './starting-page.module.css';

const StartingPageContent = () => (
  <section className={classes.starting}>
    <h1>Welcome on Board!</h1>
  </section>
);

export default memo(StartingPageContent);
