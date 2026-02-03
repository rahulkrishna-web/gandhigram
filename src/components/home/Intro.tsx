import Link from 'next/link';
import Image from 'next/image';
import styles from './Intro.module.css';

const Intro = () => {
    return (
        <section className={styles.intro}>
            <div className={styles.container}>
                <div className={styles.card}>
                    <div className={styles.imageWrapper}>
                        <Image
                            src="/images/case-studies/story-1.jpg"
                            alt="Our Work"
                            width={400}
                            height={250}
                            className={styles.image}
                        />
                    </div>
                    <div className={styles.content}>
                        <h2 className={styles.title}>Our <span className={styles.italicHighlight}>work</span></h2>
                        <p className={styles.description}>
                            We work with partners around the world to tackle big challenges and improve people’s lives.
                        </p>
                        <Link href="/programs/mental-health" className={styles.link}>Learn more about our work</Link>
                    </div>
                </div>

                <div className={styles.card}>
                    <div className={styles.imageWrapper}>
                        <Image
                            src="/images/case-studies/story-2.jpg"
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
                        <Link href="/legacy" className={styles.link}>Explore our story</Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Intro;
