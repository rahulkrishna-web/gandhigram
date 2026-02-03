'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import styles from './CaseStudies.module.css';
import { caseStudies } from '@/data/caseStudies';

const CaseStudies = () => {
    const carouselRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (carouselRef.current) {
            const { current } = carouselRef;
            const scrollAmount = 382;
            if (direction === 'left') {
                current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            } else {
                current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        }
    };

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Impact Stories</h2>
                    <div className={styles.navContainer}>
                        <button
                            className={`${styles.navBtn} ${styles.prevButton}`}
                            onClick={() => scroll('left')}
                            aria-label="Previous slide"
                        >
                            <ArrowLeft size={24} />
                        </button>
                        <button
                            className={`${styles.navBtn} ${styles.nextButton}`}
                            onClick={() => scroll('right')}
                            aria-label="Next slide"
                        >
                            <ArrowRight size={24} />
                        </button>
                    </div>
                </div>

                <div className={styles.carouselContainer} ref={carouselRef}>
                    {caseStudies.map((study) => (
                        <div key={study.id} className={styles.card}>
                            <div
                                className={styles.image}
                                style={{ backgroundImage: `url(${study.image})` }}
                                role="img"
                                aria-label={study.title}
                            />
                            <div className={styles.content}>
                                <span className={styles.tag}>{study.category}</span>
                                <h3 className={styles.cardTitle}>{study.title}</h3>
                                <p className={styles.description}>{study.summary}</p>
                                <Link href={`/case-studies/${study.id}`} className={styles.link}>
                                    Read Story
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CaseStudies;
