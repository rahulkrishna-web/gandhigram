'use client';
import { useRef } from 'react';
import Link from 'next/link';
import styles from './CaseStudies.module.css';

const caseStudies = [
    {
        id: 1,
        title: "Rebuilding Lives",
        desc: "How mental health intervention restored dignity to a homeless wanderer.",
        tag: "Mental Health"
    },
    {
        id: 2,
        title: "A New Beginning",
        desc: "Detailed account of early intervention saving a child's developmental future.",
        tag: "Early Intervention"
    },
    {
        id: 3,
        title: "Community Resilience",
        desc: "Empowering a village through collective awareness and support systems.",
        tag: "Community"
    },
    {
        id: 4,
        title: "Vocational Triumph",
        desc: "From patient to productive citizen: A journey of rehabilitation.",
        tag: "Rehabilitation"
    }
];

const CaseStudies = () => {
    const carouselRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (carouselRef.current) {
            const { current } = carouselRef;
            const scrollAmount = 300;
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
                    <h2 className={styles.title}>IMPACT STORIES</h2>

                </div>

                {/* Navigation Buttons (Visual only for now, can be hooked up) */}
                <div className={styles.navContainer}>
                    <button className={styles.navBtn} aria-label="Previous" onClick={() => scroll('left')}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                        </svg>
                    </button>
                    <button className={styles.navBtn} aria-label="Next" onClick={() => scroll('right')}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                    </button>
                </div>

                <div className={styles.carouselContainer} ref={carouselRef}>
                    <div className={styles.carouselTrack}>
                        {caseStudies.map((study) => (
                            <div key={study.id} className={styles.card}>
                                <div className={styles.cardImagePlaceholder}>
                                    {/* Image would go here */}
                                </div>
                                <div className={styles.cardContent}>
                                    <h3 className={styles.cardTitle}>{study.title}</h3>
                                    <p className={styles.cardDesc}>{study.desc}</p>
                                    <Link href={`/case-studies/${study.id}`} className={styles.link}>
                                        Read Story
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CaseStudies;
