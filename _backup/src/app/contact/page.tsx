import React from 'react';
import styles from './Contact.module.css';

const ContactPage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className="breadcrumb">
          HOME / <span>CONTACTS</span>
        </div>
        
        <h1 className={styles.heading}>Contacts</h1>
        
        <div className={styles.grid}>
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>WORKING HOURS</h2>
            <div className={styles.content}>
              <p>on weekdays</p>
              <p>from 10:00 to 19:00</p>
            </div>
          </div>
          
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>CONTACTS</h2>
            <div className={styles.content}>
              <p className={styles.phone}>+100 100 100 100</p>
              <p className={styles.email}>Roproduction@gmail.com</p>
            </div>
          </div>
          
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>SOCIAL NETWORK</h2>
            <div className={styles.socials}>
              <div className={styles.socialIcon}>
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.12.02-1.96 1.24-5.54 3.65-.52.36-.99.53-1.41.52-.46-.01-1.35-.26-2.01-.48-.81-.27-1.45-.42-1.39-.88.03-.24.36-.48.98-.73 3.84-1.67 6.4-2.77 7.68-3.3 3.65-1.51 4.41-1.77 4.9-.18z"/></svg>
              </div>
              <div className={styles.socialIcon}>
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M13.162 18.994c.609 0 .858-.406.851-.915-.013-1.247.571-1.874 1.739-1.303 1.096.536 2.053 2.218 3.193 2.218h2.046c1.135 0 1.94-.925 1.482-2.115-.14-.378-.811-1.67-1.832-3.136-1.054-1.514-.85-2.118.06-3.327.06-.08 1.474-1.99 2.02-2.736.634-.863 1.066-1.564.448-1.564h-2.13c-.63 0-.916.333-1.168.914-.54 1.253-1.465 3.091-1.84 3.091-.186 0-.271-.086-.271-.249V7.801c0-.629-.183-.914-.712-.914h-3.355c-.394 0-.635.263-.635.513 0 .474.708.583.782 1.916V13.3c0 .245-.11.341-.31.341-.531 0-1.83-1.851-2.6-3.968-.224-.616-.438-.914-1.072-.914H4.55C3.3 8.759 3.05 9.3 3.32 10.02c.983 2.308 4.6 9.3 9.3 9.3l.542-.026z"/></svg>
              </div>
              <div className={styles.socialIcon}>
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12c0-5.523-4.477-10-10-10z"/></svg>
              </div>
              <div className={styles.socialIcon}>
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.48.75 2.78 1.89 3.55-.7 0-1.36-.21-1.94-.53v.05c0 2.07 1.47 3.79 3.42 4.18-.36.1-.74.15-1.13.15-.27 0-.54-.03-.8-.08.54 1.7 2.1 2.94 3.97 2.97-1.46 1.14-3.3 1.83-5.31 1.83-.34 0-.68-.02-1.02-.06C3.9 20.29 6.16 21 8.58 21 15.77 21 19.7 15.05 19.7 9.89l-.01-.51c.76-.55 1.42-1.24 1.95-2.02z"/></svg>
              </div>
            </div>
          </div>
        </div>
        
        <div className={styles.ctaWrapper}>
          <button className="primary-button">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
            WRITE TO US
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
