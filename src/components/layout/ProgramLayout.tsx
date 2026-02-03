import styles from './ProgramLayout.module.css';

interface ProgramLayoutProps {
    title: string;
    description: string;
    heroImage: string;
    children: React.ReactNode;
}

const ProgramLayout = ({ title, description, heroImage, children }: ProgramLayoutProps) => {
    return (
        <article className={styles.wrapper}>
            <section
                className={styles.hero}
                style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${heroImage})` }}
            >
                <div className={styles.heroContent}>
                    <h1 className={styles.title}>{title}</h1>
                    <p className={styles.description}>{description}</p>
                </div>
            </section>
            <div className={styles.container}>
                {children}
            </div>
        </article>
    );
};

export default ProgramLayout;
