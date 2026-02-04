'use client';

import ProgramLayout from '@/components/layout/ProgramLayout';
import SponsorWidget from '@/components/ui/SponsorWidget';
import styles from './page.module.css';
import { Activity, Puzzle, Mic, BookOpen, Smile, Gamepad2, Blocks, ClipboardCheck, Trees, IdCard, Gift, Stethoscope } from 'lucide-react';
import CountUpNumber from '@/components/ui/CountUpNumber';

export default function EarlyInterventionPage() {
    return (
        <ProgramLayout
            title="Early Intervention"
            description="Timely support and therapy for children with special needs to ensure their optimal development."
            heroImage="/images/slideshow/slide3.jpg"
        >
            <div className={styles.container}>
                {/* Lead Section */}
                <section className={styles.leadSection}>
                    <p className={styles.leadDisplay}>
                        Maximizing every child's potential through timely support and specialized care.
                    </p>
                    <p className={styles.leadText}>
                        Our Early Intervention program focuses on identifying and addressing developmental delays
                        in children at the earliest possible stage. By providing specialized care and support,
                        we aim to improve their quality of life and foster independence.
                    </p>
                </section>

                {/* Interventions Cards */}
                <section className={styles.section}>
                    <h2 className={styles.heading}>Centre-Based Interventions</h2>
                    <p className={styles.leadText} style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        The Child Rehabilitation Centre at Kasturba Hospital offers comprehensive fee-free therapeutic services.
                    </p>
                    <div className={styles.cardGrid}>
                        <div className={styles.interventionCard}>
                            <div className={styles.iconWrapper}>
                                <Activity size={32} />
                            </div>
                            <h3 className={styles.cardTitle}>Physiotherapy</h3>
                            <p className={styles.cardText}>
                                Improving mobility, physical function, and ensuring gross motor development for better movement.
                            </p>
                        </div>
                        <div className={styles.interventionCard}>
                            <div className={styles.iconWrapper}>
                                <Puzzle size={32} />
                            </div>
                            <h3 className={styles.cardTitle}>Occupational Therapy</h3>
                            <p className={styles.cardText}>
                                Enhancing daily living skills and fine motor coordination to foster independence in daily tasks.
                            </p>
                        </div>
                        <div className={styles.interventionCard}>
                            <div className={styles.iconWrapper}>
                                <Mic size={32} />
                            </div>
                            <h3 className={styles.cardTitle}>Speech Therapy</h3>
                            <p className={styles.cardText}>
                                Addressing communication challenges to help children express themselves effectively.
                            </p>
                        </div>
                        <div className={styles.interventionCard}>
                            <div className={styles.iconWrapper}>
                                <BookOpen size={32} />
                            </div>
                            <h3 className={styles.cardTitle}>Special Education</h3>
                            <p className={styles.cardText}>
                                Tailored learning strategies contributing to cognitive development and school readiness.
                            </p>
                        </div>
                        <div className={styles.interventionCard}>
                            <div className={styles.iconWrapper}>
                                <Smile size={32} />
                            </div>
                            <h3 className={styles.cardTitle}>Behaviour Therapy</h3>
                            <p className={styles.cardText}>
                                Managing and modifying challenging behaviors to improve social interaction and emotional well-being.
                            </p>
                        </div>
                    </div>
                </section>
            </div>

            {/* Impact Section */}
            <section className={styles.fullWidthSection}>
                <div className={styles.impactContent}>
                    <h2 className={styles.impactHeading}>Impact Highlights</h2>
                    <div className={styles.statsGrid}>
                        <div className={styles.statItem}>
                            <span className={styles.statValue}>
                                <CountUpNumber value={2211} repeat />
                            </span>
                            <span className={styles.statLabel}>Children Screened</span>
                        </div>
                        <div className={styles.statItem}>
                            <span className={styles.statValue}>
                                <CountUpNumber value={183} repeat />
                            </span>
                            <span className={styles.statLabel}>Enrolled & Receiving Rehab</span>
                        </div>
                        <div className={styles.statItem}>
                            <span className={styles.statValue}>
                                <CountUpNumber value={45} suffix="+" repeat />
                            </span>
                            <span className={styles.statLabel}>Families Supported</span>
                        </div>
                    </div>
                </div>
            </section>

            <div className={styles.container}>
                {/* Facilities Section */}
                <section className={styles.section}>
                    <h2 className={styles.heading}>Facilities & Resources</h2>
                    <p className={styles.leadText} style={{ textAlign: 'center' }}>
                        Our centre is designed to be a stimulating environment for children, equipped with:
                    </p>
                    <div className={styles.cardGrid}>
                        <div className={styles.interventionCard}>
                            <div className={styles.iconWrapper}>
                                <Trees size={32} />
                            </div>
                            <h3 className={styles.cardTitle}>Sensory Park</h3>
                            <p className={styles.cardText}>
                                A stimulating outdoor environment designed to enhance sensory processing.
                            </p>
                        </div>
                        <div className={styles.interventionCard}>
                            <div className={styles.iconWrapper}>
                                <Gamepad2 size={32} />
                            </div>
                            <h3 className={styles.cardTitle}>Play Equipment</h3>
                            <p className={styles.cardText}>
                                Specialized equipment to encourage physical activity and social interaction.
                            </p>
                        </div>
                        <div className={styles.interventionCard}>
                            <div className={styles.iconWrapper}>
                                <Blocks size={32} />
                            </div>
                            <h3 className={styles.cardTitle}>Learning Materials</h3>
                            <p className={styles.cardText}>
                                Advanced educational aids tailored to different developmental needs.
                            </p>
                        </div>
                        <div className={styles.interventionCard}>
                            <div className={styles.iconWrapper}>
                                <ClipboardCheck size={32} />
                            </div>
                            <h3 className={styles.cardTitle}>Assessment Tools</h3>
                            <p className={styles.cardText}>
                                Standardized tools for accurate developmental screening and progress tracking.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Parental Support Section */}
                <section className={styles.section}>
                    <h2 className={styles.heading}>Parental Support</h2>
                    <p className={styles.leadText} style={{ textAlign: 'center' }}>
                        We empower families as partners in the rehabilitation process, assisting with:
                    </p>
                    <div className={styles.cardGrid}>
                        <div className={styles.interventionCard}>
                            <div className={styles.iconWrapper}>
                                <IdCard size={32} />
                            </div>
                            <h3 className={styles.cardTitle}>Identity Cards</h3>
                            <p className={styles.cardText}>
                                Assisting families in obtaining Government Identity Cards for special needs children.
                            </p>
                        </div>
                        <div className={styles.interventionCard}>
                            <div className={styles.iconWrapper}>
                                <Gift size={32} />
                            </div>
                            <h3 className={styles.cardTitle}>Schemes & Benefits</h3>
                            <p className={styles.cardText}>
                                Guiding parents to access relevant government schemes and financial aid.
                            </p>
                        </div>
                        <div className={styles.interventionCard}>
                            <div className={styles.iconWrapper}>
                                <Stethoscope size={32} />
                            </div>
                            <h3 className={styles.cardTitle}>Medical Referrals</h3>
                            <p className={styles.cardText}>
                                Facilitating referrals to advanced medical and surgical interventions when required.
                            </p>
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
