import styles from './page.module.css';

export default function ContactPage() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>Contact Us</h1>
                <p className={styles.subtitle}>We'd love to hear from you. Reach out to us for any queries or support.</p>
            </header>

            <div className={styles.contentGrid}>
                {/* Contact Info */}
                <div className={styles.infoColumn}>
                    <div className={styles.infoBlock}>
                        <h3 className={styles.infoLabel}>Address</h3>
                        <p className={styles.infoText}>
                            Gandhigram Trust,<br />
                            Gandhigram Post, Dindigul District,<br />
                            Tamil Nadu - 624 302, India.
                        </p>
                    </div>
                    <div className={styles.infoBlock}>
                        <h3 className={styles.infoLabel}>Phone</h3>
                        <p className={styles.infoText}>+91 451 2452326</p>
                        <p className={styles.infoText}>+91 98765 43210</p>
                    </div>
                    <div className={styles.infoBlock}>
                        <h3 className={styles.infoLabel}>Email</h3>
                        <p className={styles.infoText}>info@gandhigram.org</p>
                        <p className={styles.infoText}>support@gandhigram.org</p>
                    </div>
                </div>

                {/* Contact Form */}
                <div className={styles.formColumn}>
                    <form className={styles.form}>
                        <div className={styles.formGroup}>
                            <label htmlFor="name" className={styles.label}>Name</label>
                            <input type="text" id="name" className={styles.input} placeholder="Your Name" />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="email" className={styles.label}>Email</label>
                            <input type="email" id="email" className={styles.input} placeholder="your@email.com" />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="subject" className={styles.label}>Subject</label>
                            <input type="text" id="subject" className={styles.input} placeholder="How can we help?" />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="message" className={styles.label}>Message</label>
                            <textarea id="message" className={styles.textarea} rows={4} placeholder="Your message..."></textarea>
                        </div>
                        <button type="submit" className={styles.submitBtn}>Send Message</button>
                    </form>
                </div>
            </div>

            {/* Map Section */}
            <section className={styles.mapSection}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3924.326269411652!2d77.93510531479366!3d10.270919992665328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00adaa03673f67%3A0x6b9077242d075276!2sGandhigram%20Trust!5e0!3m2!1sen!2sin!4v1675245890123!5m2!1sen!2sin"
                    width="100%"
                    height="450"
                    style={{ border: 0, filter: 'grayscale(100%) contrast(1.2)' }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </section>
        </div>
    );
}
