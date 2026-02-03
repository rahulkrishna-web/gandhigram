import Link from 'next/link';
import styles from './MissionStatement.module.css';

const MissionStatement = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.heading}>
                    Our mission is to empower <span className={styles.highlight}>rural communities</span> to live with <span className={styles.highlight}>dignity</span>, health, and self-reliance.
                </h2>
                <Link href="/about" className={styles.btn}>
                    Learn more about our role
                </Link>
            </div>
        </section>
    );
};

export default MissionStatement;
