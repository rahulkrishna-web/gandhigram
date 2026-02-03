import styles from './page.module.css';

import Link from 'next/link';
import { caseStudies } from '@/data/caseStudies';

export default function CaseStudiesPage() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>Impact Stories</h1>
                <p className={styles.subtitle}>Real stories of change, resilience, and hope from the communities we serve.</p>
            </header>

            <div className={styles.grid}>
                {caseStudies.map((study) => (
                    <article key={study.id} className={styles.card}>
                        <div className={styles.imageWrapper}>
                            <div className={styles.imagePlaceholder} style={{ backgroundImage: `url(${study.image})` }} />
                        </div>
                        <div className={styles.content}>
                            <span className={styles.category}>{study.category}</span>
                            <h2 className={styles.cardTitle}>{study.title}</h2>
                            <p className={styles.cardSummary}>{study.summary}</p>
                            <Link href={`/case-studies/${study.id}`} className={styles.readMore}>
                                Read Full Story →
                            </Link>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
}
