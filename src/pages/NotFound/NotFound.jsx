import React from 'react';
import { Title } from '../../components/Title';
import styles from './NotFound.module.scss';

const NotFound = () => (
  <div className={styles.notfound}>
    <Title> 404 Page Not Found</Title>
  </div>
);

export { NotFound };
