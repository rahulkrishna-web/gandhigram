import Link from 'next/link';
import CountUpNumber from '../ui/CountUpNumber';
import ImageCarousel from '../ui/ImageCarousel';
import styles from './Programs.module.css';

const Programs = () => {
    // Shared images for now - can be customized per program if more assets available
    const mhImages = [
        "/images/slideshow/slide2.jpg",
        "/images/slideshow/slide1.jpg",
        "/images/slideshow/slide3.jpg",
    ];

    const eiImages = [
        "/images/slideshow/slide3.jpg",
        "/images/slideshow/slide1.jpg",
        "/images/slideshow/slide2.jpg",
    ];

    return (
        <section className={styles.programs}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.sectionTitle}>Our Core Programs</h2>
                    <p className={styles.sectionSubtitle}>Empowering communities through dedicated intervention.</p>
                </div>

                <div className={styles.grid}>
                    {/* Mental Health Program */}
                    <div className={styles.programCard}>
                        <ImageCarousel images={mhImages} />
                        <div className={styles.cardContent}>
                            <h3 className={styles.programTitle}>Mental Health</h3>
                            <p className={styles.programDesc}>
                                Promoting mental well-being through counseling, rehabilitation, and community awareness.
                            </p>

                            <div className={styles.statsContainer}>
                                <h4 className={styles.statsTitle}>Programme Reach</h4>
                                <div className={styles.metrics}>
                                    <div className={styles.metricItem}>
                                        <div className={styles.metricValue}>
                                            <CountUpNumber value={663} />
                                        </div>
                                        <span className={styles.metricLabel}>Individuals Enrolled</span>
                                    </div>
                                    <div className={styles.metricItem}>
                                        <div className={styles.metricValue}>
                                            <CountUpNumber value={400} suffix="+" />
                                        </div>
                                        <span className={styles.metricLabel}>Psychiatric Treatment</span>
                                    </div>
                                    <div className={styles.metricItem}>
                                        <div className={styles.metricValue}>
                                            <CountUpNumber value={200} suffix="+" />
                                        </div>
                                        <span className={styles.metricLabel}>Received Counselling</span>
                                    </div>
                                </div>
                            </div>

                            <Link href="/programs/mental-health" className={styles.link}>Learn More &rarr;</Link>
                        </div>
                    </div>

                    {/* Early Intervention Program */}
                    <div className={styles.programCard}>
                        <ImageCarousel images={eiImages} />
                        <div className={styles.cardContent}>
                            <h3 className={styles.programTitle}>Early Intervention</h3>
                            <p className={styles.programDesc}>
                                Supporting children with developmental delays through timely assessment and therapy.
                            </p>

                            <div className={styles.statsContainer}>
                                <h4 className={styles.statsTitle}>Impact at a Glance</h4>
                                <div className={styles.metrics}>
                                    <div className={styles.metricItem}>
                                        <div className={styles.metricValue}>
                                            <CountUpNumber value={2211} />
                                        </div>
                                        <span className={styles.metricLabel}>Children Screened</span>
                                    </div>
                                    <div className={styles.metricItem}>
                                        <div className={styles.metricValue}>
                                            <CountUpNumber value={183} />
                                        </div>
                                        <span className={styles.metricLabel}>Enrolled & Receiving Rehab</span>
                                    </div>
                                    <div className={styles.metricItem}>
                                        <div className={styles.metricValue}>
                                            <CountUpNumber value={45} suffix="+" />
                                        </div>
                                        <span className={styles.metricLabel}>Families Supported</span>
                                    </div>
                                </div>
                            </div>

                            <Link href="/programs/early-intervention" className={styles.link}>Learn More &rarr;</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Programs;
