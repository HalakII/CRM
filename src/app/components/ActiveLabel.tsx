import * as React from 'react';
import styles from './ActiveLabel.module.css';

export interface IActiveLabelProps {
  children: React.ReactNode;
}

export default function ActiveLabel({ children }: IActiveLabelProps) {
  return <span className={styles.label}>{children}</span>;
}
