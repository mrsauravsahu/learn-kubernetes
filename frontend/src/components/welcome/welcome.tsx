import * as React from 'react';
import styles from './welcome.module.css';

export type WelcomeProps = {
  details?: string
info:any
};

export const Welcome: React.FC<WelcomeProps> = ({ info }) => (
  <div className={styles.container}>
    <p className={styles.welcome}>Learn Kubernetes!</p>
    <p className={styles.details}>
      {JSON.stringify(info)}
      visit
      {' '}
      <a className={styles.detailsLink} href="https://kubernetes.io">kubernetes.io</a>
    </p>
  </div>
);
