import { caseStudies } from '@/data/caseStudies';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';
import ProgramLayout from '@/components/layout/ProgramLayout';

export async function generateStaticParams() {
    return caseStudies.map((study) => ({
        id: study.id,
    }));
}

// Next.js 15+ / 16+ requires awaiting params
export default async function CaseStudyPage({ params }: { params: Promise<{ id: string }> }) {
    const resolvedParams = await params;
    const study = caseStudies.find((s) => s.id === resolvedParams.id);

    if (!study) {
        notFound();
    }

    return (
        <ProgramLayout
            title={study.title}
            description={study.summary}
            heroImage={study.image}
        >
            <div className={styles.container}>
                <Link href="/case-studies" className={styles.backLink}>
                    ← Back to all stories
                </Link>

                <article className={styles.article}>
                    <div className={styles.meta}>
                        <span className={styles.category}>{study.category}</span>
                        <span className={styles.date}>{study.date}</span>
                    </div>

                    <div
                        className={styles.content}
                        dangerouslySetInnerHTML={{ __html: study.content }}
                    />
                </article>
            </div>
        </ProgramLayout>
    );
}
