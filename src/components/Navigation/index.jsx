'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Navigation.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUser, faBriefcase, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import MobileNav from '../MobileNav';

const Navigation = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkScreenWidth = () => {
      setIsMobile(window.innerWidth <= 900);
    };
    checkScreenWidth();
    window.addEventListener('resize', checkScreenWidth);
    return () => {
      window.removeEventListener('resize', checkScreenWidth);
    };
  }, []);
  return (
    <>
      {isMobile ? (<><MobileNav /><div className={styles.content}>{children}</div></>): (
        <div className={styles.container}>
          <div className={styles.sidebar}>
            <nav className={styles.menu}>
              <Link href="/" className={styles.link}>
                <FontAwesomeIcon icon={faHouse} />Home
              </Link>
              <Link href="/aboutme" className={styles.link}>
                <FontAwesomeIcon icon={faUser} />About
              </Link>
              <Link href="/myprojects" className={styles.link}>
                <FontAwesomeIcon icon={faBriefcase} />Projects
              </Link>
              <Link href="/contact" className={styles.link}>
                <FontAwesomeIcon icon={faEnvelope} />Contact
              </Link>
            </nav>
          </div>
          <div className={styles.content}>{children}</div>
        </div>)}
    </>
  );
};
export default Navigation;