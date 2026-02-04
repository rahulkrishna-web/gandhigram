export interface ChartDataPoint {
    name: string;
    value: number;
    fill?: string;
}

export interface ImpactStat {
    id: string;
    title: string;
    value: string | number;
    subtitle: string;
    type: 'bar' | 'pie';
    data: ChartDataPoint[];
    color: string;
}

export const impactStats: ImpactStat[] = [
    {
        id: 'patient-flow',
        title: 'Patient Flow',
        value: '663',
        subtitle: 'New Individuals Enrolled',
        type: 'bar',
        color: '#8884d8',
        data: [
            { name: 'Jan', value: 45 },
            { name: 'Feb', value: 52 },
            { name: 'Mar', value: 48 },
            { name: 'Apr', value: 61 },
            { name: 'May', value: 55 },
            { name: 'Jun', value: 67 },
            { name: 'Jul', value: 72 },
            { name: 'Aug', value: 85 },
            { name: 'Sep', value: 178 }, // Peak for report
        ]
    },
    {
        id: 'demographics',
        title: 'Demographics',
        value: '100%',
        subtitle: 'Gender Distribution',
        type: 'pie',
        color: '#82ca9d',
        data: [
            { name: 'Female', value: 58, fill: '#FF8042' },
            { name: 'Male', value: 42, fill: '#0088FE' },
        ]
    },
    {
        id: 'ei-screenings',
        title: 'Child Screenings',
        value: '2,211',
        subtitle: 'Children Screened for Delays',
        type: 'bar',
        color: '#FFBB28',
        data: [
            { name: 'Q1', value: 540 },
            { name: 'Q2', value: 620 },
            { name: 'Q3', value: 1051 },
        ]
    },
    {
        id: 'diagnosis',
        title: 'Diagnosis profile',
        value: '400+',
        subtitle: 'Psychiatric Cases Managed',
        type: 'pie',
        color: '#ffc658',
        data: [
            { name: 'Schizo', value: 35, fill: '#00C49F' },
            { name: 'Mood', value: 25, fill: '#FFBB28' },
            { name: 'Anxiety', value: 20, fill: '#FF8042' },
            { name: 'Other', value: 20, fill: '#0088FE' },
        ]
    },
    {
        id: 'community-reach',
        title: 'Community Reach',
        value: '45+',
        subtitle: 'Awareness Camps Conducted',
        type: 'bar',
        color: '#ff7300',
        data: [
            { name: 'Schools', value: 15 },
            { name: 'Villages', value: 20 },
            { name: 'Workplaces', value: 10 },
        ]
    }
];
