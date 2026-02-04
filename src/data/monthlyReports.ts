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
    }
];
