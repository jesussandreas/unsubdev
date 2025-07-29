import styles from './How.module.css';
import Image from 'next/image';

export default function How() {
  return (
    <section className={styles['how']}>
      <div className={styles['how-container']}>
        <h2 className={styles['how-heading']}>how it works.</h2>
        <p className={styles['how-description']}>
          tired of a messy subscriptions feed? <br />
          unsubscribe from what’s holding your attention hostage.
        </p>

        <div className={styles['how-cards-container']}>
          <div className={styles['how-card']}>
            <Image
              src="/icons/icon-explorer@2x.png"
              alt="Internet explorer logo"
              width={32}
              height={32}
              className={styles['how-card-icon']}
            />
            <h3 className={styles['how-card-title']}>sign in with google</h3>
            <p className={styles['how-card-description']}>
              we use youtube’s official api with read-only access to your
              subscriptions.
            </p>
          </div>
          <div className={styles['how-card']}>
            <Image
              src="/icons/icon-mixtape@2x.png"
              alt="Mixtape icon"
              width={32}
              height={32}
              className={styles['how-card-icon']}
            />
            <h3 className={styles['how-card-title']}>choose what to keep</h3>
            <p className={styles['how-card-description']}>
              easily sort and filter channels by watch time, activity, or upload
              frequency.
            </p>
          </div>
          <div className={styles['how-card']}>
            <Image
              src="/icons/icon-clean@2x.png"
              alt="Brush cleaner icon"
              width={32}
              height={32}
              className={styles['how-card-icon']}
            />
            <h3 className={styles['how-card-title']}>batch unsubscribe</h3>
            <p className={styles['how-card-description']}>
              unfollow 10, 100, or all channels. one click, total control.
            </p>
          </div>
        </div>

        <div className={styles['disclaimer-window']}>
          <p className={styles['disclaimer-label']}>❏ disclaimer</p>
          <div className={styles['disclaimer-contents']}>
            <h3 className={styles['disclaimer-heading']}>trust and privacy.</h3>
            <p className={styles['long-body-paragraph']}>
              we <strong>never</strong> store your data or access your account
              beyond what’s needed to manage subscriptions. <br />
              fully transparent and secure.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
