import Link from 'next/link';
import styles from './Nav.module.css';

export default function Nav() {
  return (
    <nav className={styles['nav']}>
      <div className={styles['nav-container']}>
        <div className={styles['nav-container-logo']}>
          <span className={styles['nav-container-logo-highlight']}>u</span>
          nsub.dev ™
        </div>
        <button className={styles['nav-container-cta']}>
          start unsubscribing
        </button>
      </div>
    </nav>
  );
}
