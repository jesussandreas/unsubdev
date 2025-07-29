import Image from 'next/image';
import styles from './page.module.css';
import Nav from '../components/Nav/Nav';
import Hero from '../components/landing/Hero/Hero';
import How from '../components/landing/How/How';

export default function LandingPage() {
  return (
    <div className={styles.page}>
      <Nav />
      <Hero />
      <How />
    </div>
  );
}
