'use client';

import Image from 'next/image';
import styles from './header.module.css';
import Link from "next/link";
import { useState } from 'react';

export default function Header() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuVisible(prev => !prev);
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerDiv}>
        <Image
          className={styles.logo}
          src="/EcoNest-logo.png"
          alt="EcoNest logo"
          width={70}
          height={70}
        />
        <h1 className={styles.econestText}>EcoNest</h1>
      </div>

      <nav className={styles.nav}>
        <div
          className={`${styles.menuContainer} ${
            isMenuVisible ? styles.menuContainerVisible : styles.menuContainerHidden
          }`}
        >
          <button className={styles.menuBtn} onClick={toggleMenu}>☰</button>

          <div className={styles.buttonsContainer}>
            <Link href="/home">
              <button className={`${styles.home} ${styles.headingbuttons}`}>Home</button>
            </Link>
            <Link href="/store">
              <button className={`${styles.store} ${styles.headingbuttons}`}>Store</button>
            </Link>
            <Link href="/about">
              <button className={`${styles.about} ${styles.headingbuttons}`}>About</button>
            </Link>
            <Link href="/contact">
              <button className={`${styles.contact} ${styles.headingbuttons}`}>Contact</button>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
