import * as React from 'react';
import styles from './NotActiveLabel.module.css';

export interface INotActiveLabelProps {
  children: React.ReactNode;
}

export default function NotActiveLabel({ children }: INotActiveLabelProps) {
  return <span className={styles.label}>{children}</span>;
}
