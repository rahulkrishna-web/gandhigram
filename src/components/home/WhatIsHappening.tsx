import { HeartHandshake, MapPin, Building2, ShieldCheck, Quote } from 'lucide-react';
import styles from './WhatIsHappening.module.css';

const WhatIsHappening = () => {
    return (
        <section className={styles.section} id="what-is-happening">
            <div className={styles.container}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>What is Happening at Gandhigram</h2>
                </div>

                <div className={styles.card}>
                    <div className={styles.cardLayout}>
                        {/* Left column: Story Narrative */}
                        <div className={styles.mainContent}>
                            <div className={styles.metaRow}>
                                <span className={styles.badge}>
                                    <HeartHandshake size={15} />
                                    Success Story
                                </span>
                                <div className={styles.locationTag}>
                                    <MapPin size={14} />
                                    <span>Oddanchathram, Dindigul District</span>
                                </div>
                            </div>

                            <h3 className={styles.storyTitle}>
                                Collaboration with the District Mental Health Programme
                            </h3>

                            <div className={styles.paragraphs}>
                                <p className={styles.paragraph}>
                                    As part of our ongoing collaboration with the District Mental Health Programme (DMHP) to provide emergency mental health services and facilitate the rescue and rehabilitation of homeless persons with mental illness, we recently supported the successful intervention of a vulnerable family.
                                </p>

                                <p className={styles.paragraph}>
                                    Our field team identified a case involving a mother and her adult daughter, both living with severe schizophrenia and exhibiting wandering behaviour, placing them at significant risk. Upon receiving the information, we immediately informed and coordinated with the District Mental Health Programme (DMHP). The DMHP has recently established an Emergency Care and Recovery Centre (ECRC) in Oddanchathram to serve Dindigul district. Dr. Sasikala of the DMHP informed us today that both mother and daughter have been successfully rescued and admitted to the ECRC.
                                </p>

                                <p className={styles.paragraph}>
                                    They are now receiving comprehensive psychiatric treatment, care, and rehabilitation in a safe and supportive environment.
                                </p>
                            </div>
                        </div>

                        {/* Right column: Quote & Impact Details */}
                        <div className={styles.sidePanel}>
                            <div className={styles.quoteBox}>
                                <p className={styles.quoteText}>
                                    &ldquo;This case highlights the value of timely inter-agency collaboration and the availability of dedicated emergency mental health services in ensuring that vulnerable individuals receive appropriate care and an opportunity for recovery.&rdquo;
                                </p>
                            </div>

                            <div className={styles.impactGrid}>
                                <div className={styles.impactItem}>
                                    <HeartHandshake size={16} className={styles.impactIcon} />
                                    <span className={styles.impactLabel}>Partner</span>
                                    <span className={styles.impactValue}>DMHP</span>
                                </div>

                                <div className={styles.impactItem}>
                                    <Building2 size={16} className={styles.impactIcon} />
                                    <span className={styles.impactLabel}>Facility</span>
                                    <span className={styles.impactValue}>ECRC, Oddanchathram</span>
                                </div>

                                <div className={styles.impactItem}>
                                    <ShieldCheck size={16} className={styles.impactIcon} />
                                    <span className={styles.impactLabel}>Action</span>
                                    <span className={styles.impactValue}>Rescue &amp; Crisis Care</span>
                                </div>

                                <div className={styles.impactItem}>
                                    <Quote size={16} className={styles.impactIcon} />
                                    <span className={styles.impactLabel}>Outcome</span>
                                    <span className={styles.impactValue}>Rehabilitation &amp; Recovery</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhatIsHappening;
