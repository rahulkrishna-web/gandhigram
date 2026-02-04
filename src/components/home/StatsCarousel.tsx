'use client';

import { impactStats } from '@/data/impactData';
import StatCard from './StatCard';
import { useRef } from 'react';
import styles from './StatsCarousel.module.css';

const StatsCarousel = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div
                    ref={scrollContainerRef}
                    className={styles.carousel}
                >
                    {impactStats.map((stat, index) => (
                        <div key={stat.id} className={styles.cardWrapper}>
                            <StatCard stat={stat} index={index} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsCarousel;
