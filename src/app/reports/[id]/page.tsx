import { monthlyReports, ReportSection } from '@/data/monthlyReports';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import styles from './page.module.css';

export async function generateStaticParams() {
    return monthlyReports.map((report) => ({
        id: report.id,
    }));
}

const SectionRenderer = ({ section }: { section: ReportSection }) => {
    switch (section.type) {
        case 'header':
            return (
                <div className={styles.sectionHeader}>
                    {section.title && <h2>{section.title}</h2>}
                    {section.content && <p className={styles.sectionSubHeader}>{section.content as string}</p>}
                </div>
            );
        case 'text':
            return (
                <div className={styles.sectionText}>
                    {section.title && <h3>{section.title}</h3>}
                    {Array.isArray(section.content) ? (
                        section.content.map((p, i) => <p key={i}>{p}</p>)
                    ) : (
                        <p>{section.content as string}</p>
                    )}
                </div>
            );
        case 'list':
            return (
                <div className={styles.sectionList}>
                    {section.title && <h3>{section.title}</h3>}
                    <ul>
                        {section.items?.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                </div>
            );
        case 'table':
            return (
                <div className={styles.sectionTable}>
                    {section.title && <h3>{section.title}</h3>}
                    <div className={styles.tableWrapper}>
                        <table>
                            <thead>
                                <tr>
                                    {section.tableData?.headers.map((h, i) => <th key={i}>{h}</th>)}
                                </tr>
                            </thead>
                            <tbody>
                                {section.tableData?.rows.map((row, i) => (
                                    <tr key={i}>
                                        {row.map((cell, j) => <td key={j}>{cell}</td>)}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            );
        default:
            return null;
    }
};

export default function ReportDetailsPage({ params }: { params: { id: string } }) {
    const report = monthlyReports.find((r) => r.id === params.id);

    if (!report) {
        notFound();
    }

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <Link href="/reports" className={styles.backLink}>← Back to Reports</Link>
                <h1 className={styles.title}>{report.title}</h1>
                <p className={styles.subtitle}>{report.summary}</p>
            </div>

            <div className={styles.contentContainer}>
                {report.content ? (
                    <div className={styles.reportContent}>
                        {report.content.map((section, index) => (
                            <SectionRenderer key={index} section={section} />
                        ))}
                    </div>
                ) : (
                    <div className={styles.viewerContainer}>
                        <object
                            data={report.fileUrl}
                            type="application/pdf"
                            width="100%"
                            height="100%"
                            className={styles.pdfViewer}
                        >
                            <div className={styles.fallback}>
                                <p>Your browser does not support PDFs.
                                    <a href={report.fileUrl} target="_blank" rel="noopener noreferrer">Download the PDF</a>.</p>
                            </div>
                        </object>
                    </div>
                )}
            </div>

            <div className={styles.actions}>
                <a href={report.fileUrl} download className={styles.downloadBtn}>
                    Download PDF Version
                </a>
            </div>
        </div>
    );
}
