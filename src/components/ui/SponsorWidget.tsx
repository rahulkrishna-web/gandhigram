'use client';
import { useState } from 'react';
import Image from 'next/image';
import styles from './SponsorWidget.module.css';

interface SponsorData {
    year: number;
    sponsors: string[];
}

const sponsorData: SponsorData[] = [
    {
        year: 2025,
        sponsors: ["TATA Trusts", "Azim Premji Philanthropic Initiatives", "HCL Foundation"]
    },
    {
        year: 2024,
        sponsors: ["Infosys Foundation", "Tech Mahindra Foundation", "GiveIndia", "Adobe India"]
    },
    {
        year: 2023,
        sponsors: ["Ford Foundation", "Gates Foundation", "Rotary Club Dindigul"]
    }
];

const SponsorWidget = () => {
    const [selectedYear, setSelectedYear] = useState<number>(2025);

    const currentSponsors = sponsorData.find(d => d.year === selectedYear)?.sponsors || [];

    return (
        <div className={styles.widget}>
            <h3 className={styles.title}>Our Sponsors</h3>
            <div className={styles.pillContainer}>
                {sponsorData.map((data) => (
                    <button
                        key={data.year}
                        className={`${styles.pill} ${selectedYear === data.year ? styles.active : ''}`}
                        onClick={() => setSelectedYear(data.year)}
                    >
                        {data.year}
                    </button>
                ))}
            </div>
            <div className={styles.sponsorContent} style={{ display: 'flex', justifyContent: 'center', padding: '2rem 0', minHeight: '120px', alignItems: 'center' }}>
                <Image
                    src="/sponsors/Sanmina_Corporation_logo.svg"
                    alt="Sanmina Corporation"
                    width={200}
                    height={80}
                    style={{ objectFit: 'contain' }}
                />
            </div>
        </div>
    );
};

export default SponsorWidget;
