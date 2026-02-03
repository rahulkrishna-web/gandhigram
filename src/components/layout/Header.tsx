'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Header.module.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <Link href="/" onClick={closeMenu}>
                        Gandhigram
                    </Link>
                </div>

                {/* Desktop Nav */}
                <nav className={`${styles.nav} ${styles.desktopNav}`}>
                    <ul className={styles.navList}>
                        <li className={styles.navItem}>
                            <Link href="/">Home</Link>
                        </li>
                        <li className={`${styles.navItem} ${styles.dropdownTrigger}`}>
                            <span className={styles.navLink}>Programs ▾</span>
                            <ul className={styles.dropdownMenu}>
                                <li>
                                    <Link href="/programs/mental-health" className={styles.dropdownItem}>
                                        Mental Health
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/programs/early-intervention" className={styles.dropdownItem}>
                                        Early Intervention
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className={styles.navItem}>
                            <Link href="/case-studies">Case Studies</Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link href="/contact" className={styles.contactBtn}>Contact</Link>
                        </li>
                    </ul>
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    className={styles.hamburger}
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                    aria-expanded={isMenuOpen}
                >
                    <span className={`${styles.bar} ${isMenuOpen ? styles.open : ''}`}></span>
                    <span className={`${styles.bar} ${isMenuOpen ? styles.open : ''}`}></span>
                    <span className={`${styles.bar} ${isMenuOpen ? styles.open : ''}`}></span>
                </button>

                {/* Mobile Nav */}
                <div className={`${styles.mobileNav} ${isMenuOpen ? styles.menuOpen : ''}`}>
                    <nav className={styles.mobileNavContent}>
                        <Link href="/" className={styles.mobileLink} onClick={closeMenu}>Home</Link>

                        <div className={styles.mobileSection}>
                            <span className={styles.mobileSectionTitle}>Programs</span>
                            <Link href="/programs/mental-health" className={styles.mobileSubLink} onClick={closeMenu}>Mental Health</Link>
                            <Link href="/programs/early-intervention" className={styles.mobileSubLink} onClick={closeMenu}>Early Intervention</Link>
                        </div>

                        <Link href="/case-studies" className={styles.mobileLink} onClick={closeMenu}>Case Studies</Link>
                        <Link href="/contact" className={styles.mobileLink} onClick={closeMenu}>Contact</Link>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
