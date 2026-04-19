import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.hero}>
      <div className={styles.content}>
        <div className="breadcrumb">
          SCHAPER MEDIA / <span>PRODUCTION</span>
        </div>
        <h1 className={styles.title}>
          Crafting <span style={{ color: 'var(--primary)' }}>Stories</span> That Matter
        </h1>
        <p className={styles.subtitle}>
          Premium media production for visionary brands and storytellers.
        </p>
        <div className={styles.cta}>
          <Link href="/contact" className="primary-button">
            GET IN TOUCH
          </Link>
          <button className={styles.secondaryLink}>
            VIEW PORTFOLIO
          </button>
        </div>
      </div>
    </div>
  );
}
