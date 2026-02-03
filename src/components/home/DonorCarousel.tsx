'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './DonorCarousel.module.css';

// Mock donors or placeholders
const donors = [
    { id: 1, name: "Sanmina Corporation", logo: "/sponsors/Sanmina_Corporation_logo.svg" },
];

const DonorCarousel = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h3 className={styles.title}>Our Partners & Supporters</h3>
                <div className={styles.carouselWrapper} style={{ display: 'flex', justifyContent: 'center' }}>
                    <motion.div
                        className={styles.track}
                        style={{ width: 'auto', transform: 'none' }}
                    >
                        {donors.map((donor, index) => (
                            <div key={index} className={styles.card}>
                                <div className={styles.logoPlaceholder}>
                                    {donor.logo ? (
                                        <Image
                                            src={donor.logo}
                                            alt={donor.name}
                                            width={200}
                                            height={80}
                                            style={{ objectFit: 'contain', maxHeight: '80px', width: 'auto' }}
                                        />
                                    ) : (
                                        <span className={styles.donorName}>{donor.name}</span>
                                    )}
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default DonorCarousel;
