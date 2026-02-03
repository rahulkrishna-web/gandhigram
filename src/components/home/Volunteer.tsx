import Link from 'next/link';
import VolunteerAnimation from './VolunteerAnimation';
import styles from './Volunteer.module.css';

const Volunteer = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    <div className={styles.animationWrapper}>
                        <VolunteerAnimation />
                    </div>
                    <div className={styles.content}>
                        <h2 className={styles.title}>Join Our Mission</h2>
                        <p className={styles.description}>
                            Be the change you wish to see. Your time and skills can transform lives in rural India.
                            Whether you are a medical professional, educator, or simply willing to help, we have a place for you.
                        </p>
                        <div className={styles.actions}>
                            <Link href="/volunteer" className={styles.primaryBtn}>
                                Become a Volunteer
                            </Link>
                            <Link href="/contact" className={styles.secondaryBtn}>
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Volunteer;
