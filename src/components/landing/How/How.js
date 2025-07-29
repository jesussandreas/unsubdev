import styles from './How.module.css';
import Image from 'next/image';

export default function How() {
  return (
    <section className={styles.how}>
      <div className={styles.container}>
        <h2 className={styles.heading}>how it works.</h2>
        <p className={styles.description}>
          tired of a messy subscriptions feed? <br />
          unsubscribe from what’s holding your attention hostage.
        </p>

        <div className={styles.steps}>
          <div className={styles.card}>
            <h3>sign in with google</h3>
            <p>
              we use youtube’s official api with read-only access to your
              subscriptions.
            </p>
          </div>
          <div className={styles.card}>
            <h3>choose what to keep</h3>
            <p>
              easily sort and filter channels – by watch time, activity, or
              upload frequency.
            </p>
          </div>
          <div className={styles.card}>
            <h3>batch unsubscribe</h3>
            <p>
              unfollow 10, 100, or all channels. <br />
              one click, total control.
            </p>
          </div>
        </div>

        <div className={styles.disclaimer}>
          <div className={styles.disclaimerLabel}>❏ disclaimer</div>
          <h3 className={styles.trust}>trust and privacy.</h3>
          <p className={styles.note}>
            we <strong>never</strong> store your data or access your account
            beyond what’s needed to manage subscriptions. <br />
            fully transparent and secure.
          </p>
        </div>
      </div>
    </section>
  );
}
