'use client';
import Link from 'next/link';
import { useState } from 'react';
import styles from './MobileNav.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUser, faBriefcase, faEnvelope,faBars } from '@fortawesome/free-solid-svg-icons';

const MobileNav = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

    return (
        <div id="circularMenu" className={`${styles['circular-menu']} ${menuActive ? styles.active : ''}`}>
            <a className={styles["floating-btn"]} onClick={toggleMenu}>
                <FontAwesomeIcon icon={faBars} />
            </a>
            <menu className="items-wrapper">
                <Link href="/" className={styles["menu-item"]}>
                    <FontAwesomeIcon icon={faHouse} />
                </Link>
                <Link href="/aboutme" className={styles["menu-item"]}>
                    <FontAwesomeIcon icon={faUser} />
                </Link>
                <Link href="/myprojects" className={styles["menu-item"]}>
                    <FontAwesomeIcon icon={faBriefcase} />
                </Link>
                <Link href="/contact" className={styles["menu-item"]}>
                    <FontAwesomeIcon icon={faEnvelope} />
                </Link>
            </menu>
        </div>
    );
};

export default MobileNav;