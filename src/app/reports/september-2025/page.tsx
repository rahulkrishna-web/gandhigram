import ProgramLayout from '@/components/layout/ProgramLayout';
import styles from './page.module.css';

export default function September2025ReportPage() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>Monthly Activity Report</h1>
                <p className={styles.subtitle}>September 2025</p>
                <div className={styles.meta}>
                    <span>Gandhigram Trust</span>
                    <span>•</span>
                    <span>Mental Health Project</span>
                </div>
                <div style={{ marginTop: '2rem' }}>
                    <a
                        href="/september-2025-report.pdf"
                        download
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            backgroundColor: '#2E8B57',
                            color: 'white',
                            padding: '0.75rem 1.5rem',
                            borderRadius: '9999px',
                            textDecoration: 'none',
                            fontWeight: 500,
                            boxShadow: '0 4px 6px rgba(46, 139, 87, 0.2)',
                            transition: 'all 0.2s ease'
                        }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" style={{ width: 20, height: 20 }}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M12 9.75l-3 3m0 0l3 3m-3-3h7.5M8.25 12.75L12 16.5" />
                        </svg>
                        Download PDF Report
                    </a>
                </div>
            </header>

            {/* 1. Activities of the Month */}
            <section className={styles.section}>
                <h2 className={styles.heading}>Activities of the Month</h2>
                <ol className={styles.activityList}>
                    <li>Awareness programmes</li>
                    <li>Clinical Work</li>
                    <li>Consultation meeting on creation of AI Chatbot for Adolescents in Tamil.</li>
                    <li>Case studies</li>
                </ol>
            </section>

            {/* 2. Awareness Programmes */}
            <section className={styles.section}>
                <h2 className={styles.heading}>1. Awareness Programmes</h2>
                <h3 className={styles.subheading}>
                    A. Awareness Programmes
                </h3>
                <div className={styles.tableWrapper}>
                    <table className={styles.reportTable}>
                        <thead>
                            <tr>
                                <th>S.No</th>
                                <th>Beneficiary</th>
                                <th>Date</th>
                                <th>Place</th>
                                <th>Participants</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Mahatma Gandhi National Rural Employee Guarantee Act (MGNREGA) Workers</td>
                                <td>22/09/2025</td>
                                <td>Kamalapuram at Nilakottai block</td>
                                <td>48 workers</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Anganwadi workers, parents of children attending the Anganwadi centre</td>
                                <td>24/09/2025,<br />26/09/2025</td>
                                <td>Ammapatti, Ammayanayakanur at Nilakottai block and Sithayankottai at Athoor block</td>
                                <td>23 workers</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Workers at Town panchayat office</td>
                                <td>24/09/2025,<br />26/09/2025</td>
                                <td>Ammayanayakanur at Nilakottai block and Sithayankottai at Athoor block</td>
                                <td>60 workers</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Pregnant women and their attendees</td>
                                <td>8/09/2025,<br />16/09/2025,<br />25/09/2025</td>
                                <td>Scan centre at Kasturba hospital</td>
                                <td>58 workers</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p style={{ marginTop: '1rem' }}>
                    In September 2025, eight mental health awareness programmes were conducted across five locations, reaching 189 beneficiaries including Mahatma Gandhi National Rural Employee Guarantee Act (MGNREGA) workers, Anganwadi workers, pregnant women and Town Panchayat office workers. In collaboration with the Child Welfare Programme, sessions were also held in Town Panchayat office, Sithayankottai village for Town Panchayat office workers. The sessions focused on mental health awareness, antenatal care, workplace well-being, adolescent mental health and explained about project activities and services through distribution of informative pamphlets.
                </p>
            </section>

            {/* 3. Health Screening Camp */}
            <section className={styles.section}>
                <h3 className={styles.subheading}>B. Health Screening Camp and Awareness Programme at Sitharevu</h3>
                <p>
                    On 19th September 2025, a mental health awareness programme and health screening camp was conducted at AVR Mahal, Sitharevu. A total of 83 community members participated. Among them, 58 individuals were screened and received counselling for mental health concerns.
                </p>
                <div className={styles.card} style={{ marginTop: '1.5rem' }}>
                    <h3>Planning Phase</h3>
                    <p>The camp was planned in collaboration with Kasturba Hospital in Sitharevu panchayat. First, approvals were obtained from District Collector of Dindigul, Joint Director of Health Service, Panchayat Secretary, Village Administrative Officer and Tahsildar. The camp information was also given to Government Hospital at Batlagundu, Zonal Officer and the Headmaster of Government School at Sitharevu. The camp was attended by Nursing Superintendent, Paediatrican, Obstetrician, Duty Medical Officer and representatives from Medical Record Department and Laboratory department attended. The camp aimed to reach residents from the villages of Sitharevu, Nellore, Nellore Colony and Kuppinayakanpatti.</p>
                </div>

                <h3 style={{ marginTop: '1.5rem', marginBottom: '1rem', color: '#2E8B57' }}>Preparatory Phase</h3>
                <ul className={styles.activityList}>
                    <li><strong>Venue Arranged:</strong> AVR Mahal was confirmed as the venue for conducting the camp activities.</li>
                    <li><strong>Publicity Materials Prepared:</strong> Printed leaflets and banners were created to spread awareness about the health screening camp and distributed door-to-door.</li>
                    <li><strong>Auto Announcement:</strong> Auto announcements were carried out in all four villages of Sitharevu Panchayat to inform the community.</li>
                    <li><strong>Volunteer Support for Field Mobilization:</strong> Two local volunteers assisted the Mental Health Project team in mobilizing people in the field.</li>
                    <li><strong>Emergency Support:</strong> Arrangements were made for ambulance service, fire service and police security.</li>
                </ul>

                <h3 style={{ marginTop: '1.5rem', marginBottom: '1rem', color: '#2E8B57' }}>The Programme</h3>
                <ul className={styles.activityList}>
                    <li><strong>Child Health Screening:</strong> Children were assessed for growth parameters, nutritional status, and immunization coverage. Deworming, nutritional supplements and oral health education were provided as part of the intervention. Children were also screened for Autism and Attention deficit Hyperactivity disorder.</li>
                    <li><strong>Mental Health Screening:</strong> Standardized questionnaire were used to screen individuals for symptoms of Common Mental Disorder (CMD) and Severe Mental Disorder (SMD).</li>
                    <li><strong>Mental Health Counselling:</strong> On-site counselling services were offered to individuals requiring psychological support.</li>
                    <li><strong>Screening for High Blood Pressure, Diabetes and Kidney problems:</strong> Comprehensive screening for hypertension, diabetes, and kidney function was conducted using blood pressure measurements, blood sugar tests and renal assessments. Individuals with abnormal results were counselled on lifestyle changes and referred for further medical evaluation.</li>
                    <li><strong>Women’s Health Check-up:</strong> Screening for Gynaecological issues and breast health were conducted. Participants received education on menstrual hygiene, nutrition and preventive reproductive care.</li>
                </ul>

                <h3 style={{ marginTop: '1.5rem', marginBottom: '1rem', color: '#2E8B57' }}>Outcome</h3>
                <ul className={styles.activityList}>
                    <li>A total of 58 individuals were screened for mental health concerns, focusing on symptoms of Common Mental Disorder (CMD) and Severe Mental Disorder (SMD).</li>
                    <li>Among them, 3 individuals were identified with signs of Mental disorder and referred to visit weekly clinic for further treatment under Mental Health care project.</li>
                    <li>Immediate, on-site counselling support was provided to 37 participants who presented with mild to moderate emotional concerns.</li>
                    <li>12 individuals were referred to visit trained counsellors for structured follow-up sessions under Mental Health care project.</li>
                    <li>2 participants exhibiting severe symptoms of mental disorder along with neurological problems were referred to District Mental Health Programme (DMHP) for specialized evaluation and care.</li>
                    <li>Additionally, all attendees benefited from awareness sessions on mental well-being, coping strategies, ways to handle adolescents during crisis and the importance of seeking timely psychological support.</li>
                </ul>
            </section>

            {/* 4. Clinical Work */}
            <section className={styles.section}>
                <h2 className={styles.heading}>2. Clinical Work / Counselling Sessions / Rehabilitation Follow Up</h2>
                <div className={styles.grid}>
                    <div className={styles.card}>
                        <h3>A. Clinical Work</h3>
                        <p><strong>No.of.Clinics:</strong> 04</p>
                        <p><strong>Place:</strong> Mental Health Project Wing</p>
                        <p><strong>Date:</strong> 3rd, 10th, 17th, 24th September 2025</p>
                        <p><strong>Time:</strong> 04.00pm to 05.30pm</p>
                        <p><strong>No. of New Cases registered:</strong> 16</p>
                        <p><strong>No. of Cases for review:</strong> 114</p>
                        <p><strong>Telemedicine consultations:</strong> 23</p>
                        <p style={{ marginTop: '1rem' }}>The Mental Health Project conducts a Psychiatric clinic every Wednesday at Kasturba Hospital. Consultations are available both in-person and via Telemedicine. Those in need also receive free medications.</p>
                        <p>At the start of each clinic day, a resource person leads a motivational music session. This uplifting segment serves several purposes: it promotes emotional relief, encourages adherence to prescribed medications, raises awareness about the importance of follow-up visits for mental health disorders, and offers a positive mind before consultations.</p>
                    </div>
                    <div className={styles.card}>
                        <h3>B. Counselling Sessions</h3>
                        <p>The sessions are held at the Mental Health Project Wing and occasionally, in the Community (Single and Group). Number of new cases registered for Counselling were 19.</p>
                        <p>The Mental Health Project at Kasturba Hospital offers free counselling at the Mental Health Wing. During a field visit, the Project Psychologist and field team provided immediate mental crisis support to four individuals (addressing grief, family conflict, adolescent behaviour, work-related stress and adjustment) and have short-noted four additional cases who would benefit from care.</p>
                        <h3 style={{ marginTop: '1rem' }}>C. Client Support</h3>
                        <p>Our project staff supported four clients to obtain Unique Disability ID (UDID) card for disability benefits.</p>
                    </div>
                </div>
            </section>

            {/* 5. Consultation Meeting */}
            <section className={styles.section}>
                <h2 className={styles.heading}>3. Consultation Meeting on Creation of AI Chatbot for Adolescents in Tamil</h2>
                <p>With increasing use of technology in health services, we are making efforts to create AI chatbot in local Tamil language for our women and adolescents clients. In this regard, a preliminary online meeting was held by Project Director and Project Manager with the team from WYSA App to discuss further plans.</p>
            </section>

            {/* 6. Case Studies (Wrapper) */}
            <section className={styles.section}>
                <h2 className={styles.heading}>4. Case Studies</h2>
                <div className={styles.caseStudy}>
                    <h3>A. Marital Conflict & Emotional Distress</h3>
                    <div className={styles.patientMeta}>Female, 41 years</div>
                    <p><strong>Presenting Concern:</strong> Intense emotional distress and suicidal thoughts related to ongoing marital conflict. Discovered husband's extramarital affair, leading to arguments, sleep disturbances, and family instability.</p>
                    <p><strong>Intervention:</strong> Counselling support using Cognitive Behavioural Therapy (CBT) and psychotherapy techniques to process emotions and develop healthier coping mechanisms.</p>
                    <p><strong>Outcome:</strong> After two sessions, client reported noticeable improvement in emotional state, greater calmness, and improved family dynamics as husband started to rebuild the relationship.</p>
                </div>
            </section>

            <section className={styles.section}>
                <h2 className={styles.heading}>Case Studies from Treatment</h2>
                <div className={styles.tableWrapper}>
                    <table className={styles.reportTable}>
                        <thead>
                            <tr>
                                <th>S.No</th>
                                <th>Diagnosis</th>
                                <th>Gender/Age</th>
                                <th>Details</th>
                                <th>Symptoms</th>
                                <th>Intervention</th>
                                <th>Outcome</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>General Anxiety disorder with panic disorder</td>
                                <td>F / 35</td>
                                <td>Patient came for treatment on December 2023 from Chinnalapatti. Referred by Kasturba hospital outpatient Department.</td>
                                <td>Fear of darkness, funeral and closed space, Anger issues, sleeplessness, palpitations and blocking sensations in chest; inability to do daily household activities.</td>
                                <td>Counselling support and prescribed medications was provided. The client's treatment progress was closely monitored.</td>
                                <td>Patient has shown improvements in self-care and functioning, has resumed daily chores, reduced anxiety and chest tightness, better sleep, tapered medications gradually.</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Delusional disorder</td>
                                <td>F / 24</td>
                                <td>Patient came for treatment on December 2023 from Bodikamanvadi identified by Field worker through survey using Common Mental Disorder (CMD) questionnaire.</td>
                                <td>Anger, loneliness, grandiose ideas, poor sleep and communication, suspicious and unable to take care of her child.</td>
                                <td>Prescribed medications was provided. Progress was assessed and treatment process is ongoing.</td>
                                <td>Patient improved self-care, resumed chores, gained job, financial independence, stability; medications tapered with clinical supervision.</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Bipolar disorder</td>
                                <td>M / 48</td>
                                <td>Patient came for treatment from Athilakshmipuram on February 2024 identified by fieldworker.</td>
                                <td>Self-harm, suspiciousness, supernatural thoughts and beliefs, self talking, anger, loneliness and poor relationship with his wife.</td>
                                <td>Prescribed medication were provided and treatment process is currently ongoing.</td>
                                <td>Patient shows improved self-care, sleep, reduced anger, resumed chores, reconciled with wife, employed, independent, supports children.</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Schizophrenia</td>
                                <td>F / 39</td>
                                <td>Patient came for treatment from Pithalapatti on March 2024 referred by Kasturba Hospital OP centre.</td>
                                <td>Anger, sleep disturbance, auditory hallucinations, suspiciousness, self-talking and unable to take care of her children.</td>
                                <td>Prescribed medications was provided and treatment is ongoing.</td>
                                <td>Patient shows improved better sleep, appetite, fewer hallucinations; employed under MGNREGA, lives independently, manages family and finances.</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>Depression</td>
                                <td>M / 52</td>
                                <td>Patient came for treatment from Chinnalapatti on August 2024 referred by patient visiting weekly clinic on regular basis.</td>
                                <td>Sleep disturbance, hopelessness, emotional outburst at times, anxiety and family conflicts after a gradual loss in his garment business.</td>
                                <td>Family counselling and prescribed medications was provided and treatment is ongoing.</td>
                                <td>Patient shows improved self-care, sleep, independence; resumed chores, manages garment business independently with wife’s support.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <section className={styles.section}>
                <h2 className={styles.heading}>Community & Awareness Activities</h2>
                <ul className={styles.activityList}>
                    <li>Mental Health Awareness Programme for MGNREGA Workers.</li>
                    <li>Mental Health Awareness Programme for parents of children attending the Anganwadi centre and Anganwadi workers.</li>
                    <li>Mental Health Awareness session at Town panchayat office in collaboration with Child Welfare programme.</li>
                    <li>A Mental Health Awareness session for pregnant women visiting the Scan centre at Kasturba Hospital.</li>
                    <li>A health screening camp for community people at Sitharevu village.</li>
                    <li>A typical Weekly Clinic Day conducted at Kasturba Hospital on every Wednesday.</li>
                    <li>Consultation meeting on creation of AI Chatbot for Adolescents in Tamil.</li>
                </ul>
            </section>
        </div>
    );
}
