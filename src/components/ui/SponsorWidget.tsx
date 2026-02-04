'use client';
import { useState } from 'react';
import Image from 'next/image';
import styles from './SponsorWidget.module.css';

interface Sponsor {
    name: string;
    logo?: string;
}

interface SponsorData {
    year: number;
    sponsors: Sponsor[];
}

const sponsorData: SponsorData[] = [
    {
        year: 2025,
        sponsors: [
            { name: "Sanmina Corporation", logo: "/sponsors/Sanmina_Corporation_logo.svg" }
        ]
    },
    {
        year: 2024,
        sponsors: [
            { name: "Sanmina Corporation", logo: "/sponsors/Sanmina_Corporation_logo.svg" },
            { name: "USAID", logo: "/sponsors/usaid-logo.png" },
            { name: "SAMRIDH", logo: "/sponsors/samridh-logo.png" }
        ]
    },
    {
        year: 2023,
        sponsors: [
            { name: "Sanmina Corporation", logo: "/sponsors/Sanmina_Corporation_logo.svg" }
        ]
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
            <div className={styles.sponsorContent} style={{ minHeight: '160px' }}>
                {/* Desktop Grid */}
                <div className={styles.desktopGrid}>
                    {currentSponsors.map((sponsor, index) => (
                        <div
                            key={`desktop-${index}`}
                            style={{
                                background: '#fff',
                                padding: '2rem',
                                borderRadius: '16px',
                                fontWeight: 600,
                                color: '#334155',
                                boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                height: '160px',
                                minWidth: '320px',
                            }}
                        >
                            {sponsor.logo ? (
                                <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                                    <Image
                                        src={sponsor.logo}
                                        alt={sponsor.name}
                                        fill
                                        style={{ objectFit: 'contain' }}
                                    />
                                </div>
                            ) : (
                                <span style={{ fontSize: '1.25rem' }}>{sponsor.name}</span>
                            )}
                        </div>
                    ))}
                </div>

                {/* Mobile Ticker */}
                <div
                    className={styles.mobileTicker}
                    style={{
                        animation: currentSponsors.length > 1 ? undefined : 'none',
                        justifyContent: currentSponsors.length > 1 ? 'flex-start' : 'center',
                        width: currentSponsors.length > 1 ? 'max-content' : '100%',
                    }}
                >
                    {(currentSponsors.length > 1 ? [...currentSponsors, ...currentSponsors] : currentSponsors).map((sponsor, index) => (
                        <div key={`mobile-${index}`} className={styles.tickerItem}>
                            {sponsor.logo ? (
                                <div style={{ position: 'relative', width: '100%', height: '160px' }}>
                                    <Image
                                        src={sponsor.logo}
                                        alt={sponsor.name}
                                        fill
                                        style={{ objectFit: 'contain' }}
                                    />
                                </div>
                            ) : (
                                <span style={{ fontWeight: 600, color: '#334155', fontSize: '1.25rem' }}>
                                    {sponsor.name}
                                </span>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SponsorWidget;
