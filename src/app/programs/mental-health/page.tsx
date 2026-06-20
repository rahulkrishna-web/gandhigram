'use client';

import ProgramLayout from '@/components/layout/ProgramLayout';
import DonorCarousel from '@/components/home/DonorCarousel';
import GalleryGrid from '@/components/gallery/GalleryGrid';
import galleryManifest from '@/data/gallery-manifest.json';
import styles from './page.module.css';
import { HeartPulse, Users, Briefcase, MapPin } from 'lucide-react';
import CountUpNumber from '@/components/ui/CountUpNumber';

export default function MentalHealthPage() {
    return (
        <ProgramLayout
            title="Mental Health Project"
            description=""
            heroImage="/images/banners/mental-health-banner-2.webp"
            heroImages={[
                '/images/banners/mental-health-banner-1.webp',
                '/images/banners/mental-health-banner-2.webp',
                '/images/banners/mental-health-banner-3.webp'
            ]}
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
                            <h3 className={styles.cardTitle}>Community Awareness Programmes</h3>
                            <p className={styles.cardText}>
                                Targeted programs for MGNREGA workers, Parents and caregivers of school children and adolescents, Self-Help group workers and Panchayat leaders.
                            </p>
                        </div>
                        <div className={styles.interventionCard}>
                            <div className={styles.iconWrapper}>
                                <HeartPulse size={32} />
                            </div>
                            <h3 className={styles.cardTitle}>Free Bi-Weekly Clinics</h3>
                            <p className={styles.cardText}>
                                Specialized Psychiatric Care, and provision of free medicines at Kasturba Hospital, ensuring regular treatment and monitoring of beneficiaries.
                            </p>
                        </div>
                        <div className={styles.interventionCard}>
                            <div className={styles.iconWrapper}>
                                <Briefcase size={32} />
                            </div>
                            <h3 className={styles.cardTitle}>Counselling Services</h3>
                            <p className={styles.cardText}>
                                Counselling and mental health support services are available daily.
                                <br />
                                <br />
                                Individual counselling, Family counselling, crisis intervention and mental health support services for caregivers of Residential Schools and Children&apos;s Homes.
                            </p>
                        </div>
                        <div className={styles.interventionCard}>
                            <div className={styles.iconWrapper}>
                                <MapPin size={32} />
                            </div>
                            <h3 className={styles.cardTitle}>Community Outreach Services</h3>
                            <p className={styles.cardText}>
                                Trained team of social workers and volunteers, act as a critical link between the community and the mental health programme by identifying the needs of beneficiaries and ensuring regular treatment through home visits.
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
                    <h2 className={styles.heading} style={{ marginBottom: '1rem' }}>Program Activities Gallery</h2>
                    <p className={styles.leadText} style={{ textAlign: 'center', marginBottom: '2rem' }}>
                        Snapshots from our field work, awareness camps, and community engagement sessions.
                    </p>
                    <GalleryGrid albums={galleryManifest} />
                </section>

                <section className={styles.section}>
                    <DonorCarousel />
                </section>
            </div>
        </ProgramLayout >
    );
}
