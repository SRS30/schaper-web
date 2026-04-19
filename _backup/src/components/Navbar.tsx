import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.topRight}>
        <Link href="/portfolio" className={styles.navLink}>
          PORTFOLIO <span className={styles.plus}>+</span>
        </Link>
        <div className={styles.hamburger}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      
      <div className={styles.container}>
        <div className={styles.branding}>
          <Link href="/" className={styles.logoWrapper}>
            <Image 
              src="/logo.jpg" 
              alt="Schaper Media" 
              width={40} 
              height={40} 
              className={styles.logoImage}
            />
            <span className={styles.companyName}>SCHAPER MEDIA</span>
          </Link>
          
          <div className={styles.socialsInline}>
            <div className={styles.miniSocial}>
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.12.02-1.96 1.24-5.54 3.65-.52.36-.99.53-1.41.52-.46-.01-1.35-.26-2.01-.48-.81-.27-1.45-.42-1.39-.88.03-.24.36-.48.98-.73 3.84-1.67 6.4-2.77 7.68-3.3 3.65-1.51 4.41-1.77 4.9-.18z"/></svg>
            </div>
            <div className={styles.miniSocial}>
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M13.162 18.994c.609 0 .858-.406.851-.915-.013-1.247.571-1.874 1.739-1.303 1.096.536 2.053 2.218 3.193 2.218h2.046c1.135 0 1.94-.925 1.482-2.115-.14-.378-.811-1.67-1.832-3.136-1.054-1.514-.85-2.118.06-3.327.06-.08 1.474-1.99 2.02-2.736.634-.863 1.066-1.564.448-1.564h-2.13c-.63 0-.916.333-1.168.914-.54 1.253-1.465 3.091-1.84 3.091-.186 0-.271-.086-.271-.249V7.801c0-.629-.183-.914-.712-.914h-3.355c-.394 0-.635.263-.635.513 0 .474.708.583.782 1.916V13.3c0 .245-.11.341-.31.341-.531 0-1.83-1.851-2.6-3.968-.224-.616-.438-.914-1.072-.914H4.55C3.3 8.759 3.05 9.3 3.32 10.02c.983 2.308 4.6 9.3 9.3 9.3l.542-.026z"/></svg>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
