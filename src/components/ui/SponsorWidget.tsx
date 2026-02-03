'use client';
import { useState } from 'react';
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
            <ul className={styles.sponsorList}>
                {currentSponsors.map((sponsor, index) => (
                    <li key={index} className={styles.sponsorItem}>
                        {sponsor}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SponsorWidget;
