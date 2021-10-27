import { memo } from 'react';

import styles from './StartingPageContent.module.scss';

const StartingPageContent = () => (
  <section className={styles.starting}>
    <h1>Welcome on Board!</h1>
  </section>
);

export default memo(StartingPageContent);
