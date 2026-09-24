import { HeartHandshake, MapPin, Building2, ShieldCheck, Quote } from 'lucide-react';
import styles from './WhatIsHappening.module.css';

const WhatIsHappening = () => {
    return (
        <section className={styles.section} id="what-is-happening">
            <div className={styles.container}>
                <div className={styles.sectionHeader}>
                    <div className={styles.eyebrow}>
                        <span className={styles.pulseDot} />
                        Field Dispatch &bull; Mental Health
                    </div>
                    <h2 className={styles.sectionTitle}>What is Happening at Gandhigram</h2>
                    <p className={styles.sectionSubtitle}>
                        On-the-ground interventions, inter-agency partnerships, and real-time updates from our mission.
                    </p>
                </div>

                <div className={styles.card}>
                    <div className={styles.cardHeader}>
                        <span className={styles.badge}>
                            <HeartHandshake size={16} />
                            Success Story
                        </span>
                        <div className={styles.locationTag}>
                            <MapPin size={15} />
                            <span>Oddanchathram, Dindigul District</span>
                        </div>
                    </div>

                    <h3 className={styles.storyTitle}>
                        Collaboration with the District Mental Health Programme
                    </h3>

                    <div className={styles.articleBody}>
                        <p className={styles.paragraph}>
                            As part of our ongoing collaboration with the District Mental Health Programme (DMHP) to provide emergency mental health services and facilitate the rescue and rehabilitation of homeless persons with mental illness, we recently supported the successful intervention of a vulnerable family.
                        </p>

                        <p className={styles.paragraph}>
                            Our field team identified a case involving a mother and her adult daughter, both living with severe schizophrenia and exhibiting wandering behaviour, placing them at significant risk. Upon receiving the information, we immediately informed and coordinated with the District Mental Health Programme (DMHP). The DMHP has recently established an Emergency Care and Recovery Centre (ECRC) in Oddanchathram to serve Dindigul district. Dr. Sasikala of the DMHP informed us today that both mother and daughter have been successfully rescued and admitted to the ECRC.
                        </p>

                        <div className={styles.highlightQuote}>
                            <p className={styles.quoteText}>
                                &ldquo;They are now receiving comprehensive psychiatric treatment, care, and rehabilitation in a safe and supportive environment. This case highlights the value of timely inter-agency collaboration and the availability of dedicated emergency mental health services in ensuring that vulnerable individuals receive appropriate care and an opportunity for recovery.&rdquo;
                            </p>
                        </div>
                    </div>

                    <div className={styles.impactGrid}>
                        <div className={styles.impactItem}>
                            <div className={styles.impactIconWrapper}>
                                <HeartHandshake size={18} />
                            </div>
                            <span className={styles.impactLabel}>Partner</span>
                            <span className={styles.impactValue}>District Mental Health Programme (DMHP)</span>
                        </div>

                        <div className={styles.impactItem}>
                            <div className={styles.impactIconWrapper}>
                                <Building2 size={18} />
                            </div>
                            <span className={styles.impactLabel}>Facility</span>
                            <span className={styles.impactValue}>Emergency Care &amp; Recovery Centre (ECRC)</span>
                        </div>

                        <div className={styles.impactItem}>
                            <div className={styles.impactIconWrapper}>
                                <ShieldCheck size={18} />
                            </div>
                            <span className={styles.impactLabel}>Action</span>
                            <span className={styles.impactValue}>Rescue &amp; Crisis Psychiatric Care</span>
                        </div>

                        <div className={styles.impactItem}>
                            <div className={styles.impactIconWrapper}>
                                <Quote size={18} />
                            </div>
                            <span className={styles.impactLabel}>Outcome</span>
                            <span className={styles.impactValue}>Safe Rehabilitation &amp; Ongoing Recovery</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhatIsHappening;
