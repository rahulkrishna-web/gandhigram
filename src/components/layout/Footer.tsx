import Link from 'next/link';
import styles from './Footer.module.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.topSection}>
                    <div className={styles.logoColumn}>
                        <Link href="/" className={styles.logo}>
                            Gandhigram
                        </Link>
                        <p className={styles.tagline}>
                            A legacy of service and impact for a better tomorrow.
                        </p>
                    </div>

                    <div className={styles.linksColumn}>
                        <h4 className={styles.columnTitle}>Organization</h4>
                        <ul className={styles.linkList}>
                            <li><Link href="/about">About Us</Link></li>
                            <li><Link href="/contact">Contact</Link></li>
                            <li><Link href="/case-studies">Case Studies</Link></li>
                            <li><Link href="/reports">Monthly Reports</Link></li>
                            <li><Link href="/compliance">Compliance Report</Link></li>
                        </ul>
                    </div>

                    <div className={styles.linksColumn}>
                        <h4 className={styles.columnTitle}>Legal</h4>
                        <ul className={styles.linkList}>
                            <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                            <li><Link href="/terms-of-service">Terms of Service</Link></li>
                        </ul>
                    </div>
                </div>

                <div className={styles.bottomSection}>
                    <p className={styles.copyright}>
                        &copy; {currentYear} Gandhigram. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
