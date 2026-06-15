import Image from 'next/image';
import styles from './Team.module.css';

const Team = () => {
    return (
        <section className={styles.team}>
            <div className={styles.container}>
                <h2 className={styles.title}>Our Team</h2>
                <div className={styles.imageWrapper}>
                    <Image
                        src="/images/team.jpg"
                        alt="Our Team"
                        width={640}
                        height={360}
                        className={styles.image}
                        priority
                    />
                </div>
            </div>
        </section>
    );
};

export default Team;
