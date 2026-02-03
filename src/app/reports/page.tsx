import Link from 'next/link';
import { monthlyReports } from '@/data/monthlyReports';
import styles from './page.module.css';

export default function ReportsPage() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>Monthly Activity Reports</h1>
                <p className={styles.subtitle}>Transparent updates on our programs, impact, and community activities.</p>
            </header>

            <div className={styles.grid}>
                {monthlyReports.map((report) => (
                    <Link href={`/reports/${report.id}`} key={report.id} className={styles.card}>
                        <div className={styles.iconWrapper}>
                            <span className={styles.icon}>📄</span>
                        </div>
                        <div className={styles.content}>
                            <span className={styles.date}>{report.month} {report.year}</span>
                            <h2 className={styles.cardTitle}>{report.title}</h2>
                            <p className={styles.summary}>{report.summary}</p>
                            <span className={styles.viewLink}>View Report →</span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
