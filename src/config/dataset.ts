import { SectionType } from '../types/enum';

interface RawSection {
    title: string;
    type: string;
    labels: string[];
    values: string[];
}

interface SectionItem {
    label: string;
    value: string;
}
interface Section {
    title: string;
    items: SectionItem[];
    type?: SectionType;
}

const SectionAdapter = ({ title, type, labels, values }: RawSection) => {
    const items: SectionItem[] = labels.map((label, index) => {
        const value = values[index];

        return { label, value } as SectionItem;
    });

    return { title, type, items } as Section;
};

export const sectionsData: RawSection[] = [
    {
        title: 'My user profile',
        type: 'profile',
        labels: ['Name', 'Email', 'Phone'],
        values: ['John Doe', 'johndoe@ppms.com', '+10000000000'],
    },
    {
        title: 'My training sessions',
        type: 'generic',
        labels: [
            'Training session 1',
            'Training session 2',
            'Training session 3',
            'Training session 4',
            'Training session 5',
            'Training session 6',
        ],
        values: [
            'Pending approval',
            'Pending approval',
            'Pending approval',
            'Pending',
            'Rejected',
            'Approved',
        ],
    },
    {
        title: 'My projects',
        type: 'generic',
        labels: ['Project A', 'Project B', 'Project C', 'Project D'],
        values: ['Pending approval', 'Pending approval', 'Approved', 'Approved'],
    },
    {
        title: 'Orders',
        type: 'generic',
        labels: ['Order 1', 'Order 2', 'Order 3'],
        values: ['Rejected', 'Approved', 'Approved'],
    },
    {
        title: 'My documents',
        type: 'generic',
        labels: ['Document 1', 'Document 2', 'Document 3', 'Document 4'],
        values: ['Approved', 'Approved', 'Rejected', 'Approved'],
    },
    {
        title: 'Incidents',
        type: 'generic',
        labels: ['Incident 1', 'Incident 2', 'Incident 3'],
        values: ['Pending', 'Pending', 'Pending'],
    },
    {
        title: 'Quotes',
        type: 'generic',
        labels: ['Quote 1', 'Quote 2'],
        values: ['Pending approval', 'Pending approval'],
    },
];

export const getDataset = () => sectionsData.map(SectionAdapter);
