'use client';
import Image from 'next/image';
import styles from './DonorCarousel.module.css';

const donors = [
    { id: 1, name: "USAID (Via SAMRIDH) through IIT Delhi", logo: "/logo_new/USAID-Samridh logo.png" },
    { id: 2, name: "Sanmina SCI-Technology India Private Limited", logo: "/sponsors/Sanmina_Corporation_logo.svg" },
    { id: 3, name: "Sanmina SCI India Pvt LTD", logo: "/sponsors/Sanmina_Corporation_logo.svg" },
    { id: 4, name: "Karur Vysya Bank", logo: "/logo_new/Karur vyasa bank logo.jpg.jpeg" },
    { id: 5, name: "Copia Technologies", logo: "/logo_new/copia-logo-new.png" },
];

const marqueeItems = [...donors, ...donors, ...donors, ...donors];

const DonorCarousel = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h3 className={styles.title}>Our Donors & Partners</h3>
                <div className={styles.carouselWrapper}>
                    <div className={styles.track}>
                        {marqueeItems.map((donor, idx) => (
                            <div key={idx} className={styles.card}>
                                <div className={styles.logoWrapper}>
                                    <Image
                                        src={donor.logo}
                                        alt={donor.name}
                                        width={150}
                                        height={60}
                                        className={styles.logoImage}
                                    />
                                </div>
                                <div className={styles.divider} />
                                <span className={styles.donorName}>{donor.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DonorCarousel;
