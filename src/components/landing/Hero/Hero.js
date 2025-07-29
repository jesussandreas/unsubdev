import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles['hero']}>
      <div className={styles['hero-container']}>
        <h1 className={styles['hero-headline']}>
          <span className="underline">d</span>eclutter your youtube. instantly.
        </h1>
        <p className={styles['hero-description']}>
          clear out inactive channels and make room for content that actually
          matters. <br />
          get back to what you actually want to watch, in one click.
        </p>
        <button className={styles['hero-cta']}>start unsubscribing</button>
      </div>
    </section>
  );
}
