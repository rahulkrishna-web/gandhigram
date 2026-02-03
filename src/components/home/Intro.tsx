import Link from 'next/link';
import styles from './Intro.module.css';

const Intro = () => {
    return (
        <section className={styles.intro}>
            <div className={styles.container}>
                <div className={styles.column}>
                    <div className={styles.card}>
                        <div className={styles.imageWrapper}>
                            {/* Placeholder for About Us Image */}
                            <div className={styles.placeholderImg}></div>
                        </div>
                        <div className={styles.content}>
                            <h2 className={styles.title}>About Us</h2>
                            <p className={styles.description}>
                                Rooted in Gandhian values, we strive to build a community where service comes first.
                                Our mission is to empower the rural populace through holistic interventions.
                            </p>
                            <Link href="/about" className={styles.link}>Read More &rarr;</Link>
                        </div>
                    </div>
                </div>

                <div className={styles.column}>
                    <div className={styles.card}>
                        <div className={styles.imageWrapper}>
                            {/* Placeholder for Legacy Image */}
                            <div className={styles.placeholderImg}></div>
                        </div>
                        <div className={styles.content}>
                            <h2 className={styles.title}>Our Legacy</h2>
                            <p className={styles.description}>
                                Decades of commitment to health, education, and welfare.
                                Explore the history that shaped our foundation and future.
                            </p>
                            <Link href="/legacy" className={styles.link}>Explore History &rarr;</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Intro;
