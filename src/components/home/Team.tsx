import Image from 'next/image';
import teamImg from '../../../public/images/team.jpg';
import styles from './Team.module.css';

const Team = () => {
    return (
        <section className={styles.team}>
            <div className={styles.container}>
                <h2 className={styles.title}>Our Team</h2>
                <div className={styles.imageWrapper}>
                    <Image
                        src={teamImg}
                        alt="Our Team"
                        className={styles.image}
                        priority
                        placeholder="blur"
                        sizes="100vw"
                    />
                </div>
            </div>
        </section>
    );
};

export default Team;

