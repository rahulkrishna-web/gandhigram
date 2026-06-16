import Image from 'next/image';
import styles from './Intro.module.css';

const Intro = () => {
    return (
        <section className={styles.intro}>
            <div className={styles.container}>
                <div className={styles.card}>
                    <div className={styles.imageWrapper}>
                        <Image
                             src="/images/case-studies/our-work.webp"
                             alt="Our Work"
                             width={400}
                             height={300}
                             className={styles.image}
                        />
                    </div>
                    <div className={styles.content}>
                        <h2 className={styles.title}>Our <span className={styles.italicHighlight}>work</span></h2>
                        <p className={styles.description}>
                            We work with partners around the world to tackle big challenges, improve people’s lives, and foster lasting change.
                        </p>
                    </div>
                </div>

                <div className={styles.card}>
                    <div className={styles.imageWrapper}>
                        <Image
                             src="/images/case-studies/story-2.webp"
                             alt="Our Story"
                             width={400}
                             height={250}
                             className={styles.image}
                        />
                    </div>
                    <div className={styles.content}>
                        <h2 className={styles.title}>Our <span className={styles.italicHighlight}>story</span></h2>
                        <p className={styles.description}>
                            For over 25 years, the Gandhigram Foundation has been committed to tackling the greatest inequities in our world.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Intro;
