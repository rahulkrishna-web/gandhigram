export interface ReportSection {
    type: 'text' | 'list' | 'table' | 'key-value' | 'header';
    title?: string;
    content?: string | string[];
    items?: string[];
    tableData?: { headers: string[], rows: string[][] };
}

export interface Report {
    id: string;
    title: string;
    month: string;
    year: number;
    summary: string;
    fileUrl: string;
    content?: ReportSection[];
}

export const monthlyReports: Report[] = [
    {
        id: 'september-2025',
        title: 'Monthly Report – September 2025',
        month: 'September',
        year: 2025,
        summary: 'Monthly Activity Report: Clinical care stats, case studies, and community awareness activities.',
        fileUrl: '/docs/MONTHLY REPORT SEPTEMBER 2025 .pdf',
    },
    {
        id: 'dec-2024',
        title: 'December 2024 Report',
        month: 'December',
        year: 2024,
        summary: 'Year-end summary and holiday charitable activities.',
        fileUrl: '/reports/report-dec-2024.pdf'
    },
    {
        id: 'nov-2024',
        title: 'November 2024 Report',
        month: 'November',
        year: 2024,
        summary: 'Focus on mental health awareness camps.',
        fileUrl: '/reports/report-nov-2024.pdf'
    }
];
