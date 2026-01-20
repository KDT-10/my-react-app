import { clsx } from 'clsx';

// import './button.css';

import styles from './button.module.css';

export function CssButton() {
  const isAdmin = false;
  return <button className={clsx(styles.btn, isAdmin && styles.primary)}>CssButton</button>;
}
