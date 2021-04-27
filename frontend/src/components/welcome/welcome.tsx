import * as React from 'react';
import styles from './welcome.module.css';

export type WelcomeProps = {
  details?: string
};

export const Welcome: React.FC<WelcomeProps> = () => (
  <div className={styles.container}>
    <p className={styles.welcome}>Learn Kubernetes!</p>
    <p className={styles.details}>
      visit
      {' '}
      <a className={styles.detailsLink} href="https://kubernetes.io">kubernetes.io</a>
    </p>
  </div>
);
