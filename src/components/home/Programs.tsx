import Link from 'next/link';
import Image from 'next/image';
import CountUpNumber from '../ui/CountUpNumber';
import styles from './Programs.module.css';

const Programs = () => {
    return (
        <section className={styles.programs}>
            <div className={styles.container}>
                {/* Mental Health */}
                <div className={styles.programRow}>
                    <div className={styles.textContent}>
                        <h2 className={styles.programTitle}>Mental Health</h2>
                        <p className={styles.programDesc}>
                            Restoring dignity and hope through community-based rehabilitation and clinical care. We address the critical gap in mental healthcare with a holistic approach.
                        </p>

                        <div className={styles.statsGrid}>
                            <div className={styles.statItem}>
                                <span className={styles.statValue}>
                                    <CountUpNumber value={663} />
                                </span>
                                <span className={styles.statLabel}>Individuals Enrolled</span>
                            </div>
                            <div className={styles.statItem}>
                                <span className={styles.statValue}>
                                    <CountUpNumber value={400} suffix="+" />
                                </span>
                                <span className={styles.statLabel}>Psychiatric Treatment</span>
                            </div>
                            <div className={styles.statItem}>
                                <span className={styles.statValue}>
                                    <CountUpNumber value={200} suffix="+" />
                                </span>
                                <span className={styles.statLabel}>Received Counselling</span>
                            </div>
                        </div>

                        <Link href="/programs/mental-health" className={styles.link}>Learn More &rarr;</Link>
                    </div>
                    <div className={styles.imageWrapper}>
                        <Image
                            src="/images/slideshow/slide2.jpg"
                            alt="Mental Health Program"
                            fill
                            className={styles.programImage}
                        />
                    </div>
                </div>

                {/* Early Intervention */}
                <div className={`${styles.programRow} ${styles.reverse}`}>
                    <div className={styles.textContent}>
                        <h2 className={styles.programTitle}>Early Intervention</h2>
                        <p className={styles.programDesc}>
                            Ensuring optimal development for children with special needs. By providing specialized care early, we maximize every child's potential.
                        </p>

                        <div className={styles.statsGrid}>
                            <div className={styles.statItem}>
                                <span className={styles.statValue}>
                                    <CountUpNumber value={2211} />
                                </span>
                                <span className={styles.statLabel}>Children Screened</span>
                            </div>
                            <div className={styles.statItem}>
                                <span className={styles.statValue}>
                                    <CountUpNumber value={183} />
                                </span>
                                <span className={styles.statLabel}>Enrolled & Receiving Rehab</span>
                            </div>
                            <div className={styles.statItem}>
                                <span className={styles.statValue}>
                                    <CountUpNumber value={45} suffix="+" />
                                </span>
                                <span className={styles.statLabel}>Families Supported</span>
                            </div>
                        </div>

                        <Link href="/programs/early-intervention" className={styles.link}>Learn More &rarr;</Link>
                    </div>
                    <div className={styles.imageWrapper}>
                        <Image
                            src="/images/slideshow/slide3.jpg"
                            alt="Early Intervention Program"
                            fill
                            className={styles.programImage}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Programs;
