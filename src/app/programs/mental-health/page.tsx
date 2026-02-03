import ProgramLayout from '@/components/layout/ProgramLayout';
import SponsorWidget from '@/components/ui/SponsorWidget';
import GalleryGrid from '@/components/gallery/GalleryGrid';
import galleryManifest from '@/data/gallery-manifest.json';
import styles from './page.module.css';

export default function MentalHealthPage() {
    return (
        <ProgramLayout
            title="Mental Health Project"
            description="Restoring dignity and hope through community-based rehabilitation and clinical care."
            heroImage="/images/slideshow/slide2.jpg"
        >
            <div className={styles.content}>
                <section className={styles.section}>
                    <h2 className={styles.heading}>Project Overview</h2>
                    <p className={styles.text}>
                        The Gandhigram Trust Mental Health Project is a beacon of hope for rural communities,
                        addressing the critical gap in mental healthcare. Our approach combines clinical intervention
                        with strong community outreach to reduce stigma and promote holistic recovery.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.heading}>Key Interventions</h2>
                    <div className={styles.cardGrid}>
                        <div className={styles.featureCard}>
                            <h3 className={styles.cardTitle}>Community Awareness</h3>
                            <p className={styles.cardText}>
                                Targeted programs for MGNREGA workers, school children, and parents at Anganwadi centers to identify early signs of mental illness.
                            </p>
                        </div>
                        <div className={styles.featureCard}>
                            <h3 className={styles.cardTitle}>Weekly Clinics</h3>
                            <p className={styles.cardText}>
                                Specialized psychiatric care provided every Wednesday at Kasturba Hospital, ensuring consistent medication and counseling.
                            </p>
                        </div>
                        <div className={styles.featureCard}>
                            <h3 className={styles.cardTitle}>Rehabilitation</h3>
                            <p className={styles.cardText}>
                                Vocational training and support for patients to restart livelihoods (e.g., garment businesses), fostering independence.
                            </p>
                        </div>
                        <div className={styles.featureCard}>
                            <h3 className={styles.cardTitle}>Innovations</h3>
                            <p className={styles.cardText}>
                                Developing AI Chatbots to support adolescent mental health in regional languages (Tamil).
                            </p>
                        </div>
                    </div>
                </section>

                <section className={styles.impactSection}>
                    <h2 className={styles.heading}>Impact Highlights</h2>
                    <div className={styles.statsGrid}>
                        <div className={styles.statCard}>
                            <span className={styles.statValue}>663</span>
                            <span className={styles.statLabel}>Individuals Enrolled</span>
                        </div>
                        <div className={styles.statCard}>
                            <span className={styles.statValue}>400+</span>
                            <span className={styles.statLabel}>Psychiatric Treatment</span>
                        </div>
                        <div className={styles.statCard}>
                            <span className={styles.statValue}>200+</span>
                            <span className={styles.statLabel}>Received Counselling</span>
                        </div>
                    </div>
                </section>



                <section className={styles.section}>
                    <h2 className={styles.heading}>Program Activities Gallery</h2>
                    <p className={styles.text} style={{ marginBottom: '2rem' }}>
                        Snapshots from our field work, awareness camps, and community engagement sessions.
                    </p>
                    <GalleryGrid albums={galleryManifest} />
                </section>

                <section className={styles.section}>
                    <SponsorWidget />
                </section>
            </div>
        </ProgramLayout >
    );
}
