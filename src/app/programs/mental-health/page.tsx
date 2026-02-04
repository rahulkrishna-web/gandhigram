'use client';

import ProgramLayout from '@/components/layout/ProgramLayout';
import SponsorWidget from '@/components/ui/SponsorWidget';
import GalleryGrid from '@/components/gallery/GalleryGrid';
import galleryManifest from '@/data/gallery-manifest.json';
import styles from './page.module.css';
import { HeartPulse, Users, Briefcase, Bot } from 'lucide-react';
import CountUpNumber from '@/components/ui/CountUpNumber';

export default function MentalHealthPage() {
    return (
        <ProgramLayout
            title="Mental Health Project"
            description=""
            heroImage="/images/slideshow/slide2.jpg"
        >
            <div className={styles.container}>
                <section className={styles.leadSection}>
                    <p className={styles.leadDisplay}>
                        Restoring dignity and hope through community-based rehabilitation and clinical care.
                    </p>
                    <p className={styles.leadText}>
                        The Gandhigram Trust Mental Health Project is a beacon of hope for rural communities,
                        addressing the critical gap in mental healthcare. Our approach combines clinical intervention
                        with strong community outreach to reduce stigma and promote holistic recovery.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.heading}>Key Interventions</h2>
                    <div className={styles.cardGrid}>
                        <div className={styles.interventionCard}>
                            <div className={styles.iconWrapper}>
                                <Users size={32} />
                            </div>
                            <h3 className={styles.cardTitle}>Community Awareness</h3>
                            <p className={styles.cardText}>
                                Targeted programs for MGNREGA workers, school children, and parents at Anganwadi centers to identify early signs of mental illness.
                            </p>
                        </div>
                        <div className={styles.interventionCard}>
                            <div className={styles.iconWrapper}>
                                <HeartPulse size={32} />
                            </div>
                            <h3 className={styles.cardTitle}>Weekly Clinics</h3>
                            <p className={styles.cardText}>
                                Specialized psychiatric care provided every Wednesday at Kasturba Hospital, ensuring consistent medication and counseling.
                            </p>
                        </div>
                        <div className={styles.interventionCard}>
                            <div className={styles.iconWrapper}>
                                <Briefcase size={32} />
                            </div>
                            <h3 className={styles.cardTitle}>Rehabilitation</h3>
                            <p className={styles.cardText}>
                                Vocational training and support for patients to restart livelihoods (e.g., garment businesses), fostering independence.
                            </p>
                        </div>
                        <div className={styles.interventionCard}>
                            <div className={styles.iconWrapper}>
                                <Bot size={32} />
                            </div>
                            <h3 className={styles.cardTitle}>Innovations</h3>
                            <p className={styles.cardText}>
                                Developing AI Chatbots to support adolescent mental health in regional languages (Tamil).
                            </p>
                        </div>
                    </div>
                </section>
            </div>

            <section className={styles.fullWidthSection}>
                <div className={styles.impactContent}>
                    <h2 className={styles.impactHeading}>Impact Highlights</h2>
                    <div className={styles.statsGrid}>
                        <div className={styles.statItem}>
                            <span className={styles.statValue}>
                                <CountUpNumber value={663} repeat />
                            </span>
                            <span className={styles.statLabel}>Individuals Enrolled</span>
                        </div>
                        <div className={styles.statItem}>
                            <span className={styles.statValue}>
                                <CountUpNumber value={400} suffix="+" repeat />
                            </span>
                            <span className={styles.statLabel}>Psychiatric Treatment</span>
                        </div>
                        <div className={styles.statItem}>
                            <span className={styles.statValue}>
                                <CountUpNumber value={200} suffix="+" repeat />
                            </span>
                            <span className={styles.statLabel}>Received Counselling</span>
                        </div>
                    </div>
                </div>
            </section>

            <div className={styles.container}>
                <section className={styles.section}>
                    <h2 className={styles.heading}>Program Activities Gallery</h2>
                    <p className={styles.leadText} style={{ textAlign: 'center', marginBottom: '2rem' }}>
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
