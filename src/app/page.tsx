'use client';

import Image from 'next/image';
import styles from './page.module.css';

export default function HomePage() {
  return (
    <div className={styles.mockupContainer}>
      <div className={styles.heroContent}>
        <div className={styles.logoWrapper}>
          <Image 
            src="/logo-main.png" 
            alt="SchaperMedia Logo" 
            width={110} 
            height={110} 
            className={styles.logo}
            priority
          />
        </div>

        <div className={styles.textStrapper}>
          <h1 className={styles.title}>
            Hello. We're SchaperMedia.
          </h1>
        </div>

        <div className={styles.textStrapper}>
          <p className={`${styles.subtitle} ${styles.sub1}`}>
            We make content. The kind people like.
          </p>
        </div>
        
        <div className={`${styles.textStrapper} ${styles.sub2Wrapper}`}>
          <p className={`${styles.subtitle} ${styles.sub2}`}>
            Scroll down to see some.
          </p>
        </div>
      </div>

      <div className={styles.scrollHint}>
        <div className={styles.dotLine}></div>
      </div>
    </div>
  );
}
