import ProgramLayout from '@/components/layout/ProgramLayout';
import SponsorWidget from '@/components/ui/SponsorWidget';
import styles from './page.module.css';

export default function EarlyInterventionPage() {
    return (
        <ProgramLayout
            title="Early Intervention"
            description="Timely support and therapy for children with special needs to ensure their optimal development."
            heroImage="/images/slideshow/slide3.jpg"
        >
            <div className={styles.content}>
                <section className={styles.section}>
                    <h2 className={styles.heading}>Project Overview</h2>
                    <p className={styles.text}>
                        Our Early Intervention program focuses on identifying and addressing developmental delays
                        in children at the earliest possible stage. By providing specialized care and support,
                        we aim to maximize each child's potential and improve their quality of life.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.heading}>Centre-Based Interventions</h2>
                    <p className={styles.text}>
                        The Child Rehabilitation Centre at Kasturba Hospital is a fully equipped facility offering
                        comprehensive fee-free therapeutic services. Our multi-disciplinary approach includes:
                    </p>
                    <div className={styles.cardGrid}>
                        <div className={styles.featureCard}>
                            <h3 className={styles.cardTitle}>Physiotherapy</h3>
                            <p className={styles.cardText}>To improve mobility, physical function, and ensure gross motor development.</p>
                        </div>
                        <div className={styles.featureCard}>
                            <h3 className={styles.cardTitle}>Occupational Therapy</h3>
                            <p className={styles.cardText}>Enhancing daily living skills and fine motor coordination for independence.</p>
                        </div>
                        <div className={styles.featureCard}>
                            <h3 className={styles.cardTitle}>Speech Therapy</h3>
                            <p className={styles.cardText}>Addressing communication challenges to help children express themselves.</p>
                        </div>
                        <div className={styles.featureCard}>
                            <h3 className={styles.cardTitle}>Special Education</h3>
                            <p className={styles.cardText}>Tailored learning strategies contributing to cognitive development.</p>
                        </div>
                        <div className={styles.featureCard}>
                            <h3 className={styles.cardTitle}>Behaviour Therapy</h3>
                            <p className={styles.cardText}>Managing and modifying challenging behaviors to improve social interaction.</p>
                        </div>
                    </div>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.heading}>Facilities & Resources</h2>
                    <p className={styles.text}>
                        Our centre is designed to be a stimulating environment for children, equipped with:
                    </p>
                    <ul className={styles.list}>
                        <li>Sensory Integration Park</li>
                        <li>Play Equipment</li>
                        <li>Advanced Learning Materials</li>
                        <li>Assessment Tools</li>
                    </ul>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.heading}>Parental Support</h2>
                    <p className={styles.text}>
                        We believe in empowering families as partners in the rehabilitation process. We assist parents with:
                    </p>
                    <ul className={styles.list}>
                        <li>Obtaining Government Identity Cards for children with special needs.</li>
                        <li>Accessing government schemes and financial benefits.</li>
                        <li>Referrals to advanced medical and surgical interventions when required.</li>
                    </ul>
                </section>

                <section className={styles.impactSection}>
                    <h2 className={styles.heading}>Impact Highlights</h2>
                    <div className={styles.statsGrid}>
                        <div className={styles.statCard}>
                            <span className={styles.statValue}>2211</span>
                            <span className={styles.statLabel}>Children Screened</span>
                        </div>
                        <div className={styles.statCard}>
                            <span className={styles.statValue}>183</span>
                            <span className={styles.statLabel}>Enrolled & Receiving Rehab</span>
                        </div>
                        <div className={styles.statCard}>
                            <span className={styles.statValue}>45+</span>
                            <span className={styles.statLabel}>Families Supported</span>
                        </div>
                    </div>
                </section>

                <section className={styles.section}>
                    <SponsorWidget />
                </section>
            </div>
        </ProgramLayout>
    );
}
