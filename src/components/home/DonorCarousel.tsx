'use client';
import { motion } from 'framer-motion';
import styles from './DonorCarousel.module.css';

// Mock donors or placeholders
const donors = [
    { id: 1, name: "TATA Trusts" },
    { id: 2, name: "HCL Foundation" },
    { id: 3, name: "Azim Premji Philanthropic Initiatives" },
    { id: 4, name: "Infosys Foundation" },
    { id: 5, name: "GiveIndia" },
    { id: 6, name: "Tech Mahindra Foundation" },
];

const DonorCarousel = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h3 className={styles.title}>Our Partners & Supporters</h3>
                <div className={styles.carouselWrapper}>
                    <motion.div
                        className={styles.track}
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{
                            repeat: Infinity,
                            type: "tween",
                            ease: "linear",
                            duration: 20
                        }}
                    >
                        {/* Duplicate lists for seamless loop */}
                        {[...donors, ...donors].map((donor, index) => (
                            <div key={index} className={styles.card}>
                                <div className={styles.logoPlaceholder}>
                                    {/* Replace with <Image> when logos are available */}
                                    <span className={styles.donorName}>{donor.name}</span>
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
