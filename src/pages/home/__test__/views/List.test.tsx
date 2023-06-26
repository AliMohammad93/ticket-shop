import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ListView from "../../partials/views/List";
import {ThemeProvider} from "@mui/material/styles";
import theme from "../../../../config/material-ui/theme";
import { IEvent } from '../../interfaces/Events';
jest.mock('react-i18next', () => ({
    useTranslation: () => {
        return {
            t: (str: string) => str,
            i18n: {
                changeLanguage: () => new Promise(() => {}),
            },
        };
    },
}));
jest.mock('../../../../hooks/useFormattedDate', () => () => {
    return (dateStr: string) => `Formatted Date ${dateStr}`;
});
jest.mock('../../../../hooks/useFormattedTime', () => () => {
    return (dateStr: string) => `Formatted Time ${dateStr}`;
});

const mockData: IEvent[] = [
    {
        title: 'Test Title',
        imageUrl: 'Test Image',
        startDate: new Date().toISOString(),
        endDate: new Date().toISOString(),
        shopUrl: 'Test URL',
        address: {
            "@type": "PostalAddress",
            streetAddress: 'Test Street',
            addressLocality: 'Test Locality',
            addressRegion: 'Test Region',
            postalCode: 'Test Postal Code',
            addressCountry: 'Test Country'
        },
        priceFrom: 100,
    },
];

describe('ListView Component', () => {
    beforeEach(() => {
        render(
            <ThemeProvider theme={theme}>
                <ListView data={mockData} />
            </ThemeProvider>
        );
    });

    it('renders event title', () => {
        expect(screen.getByText('Test Title')).toBeInTheDocument();
    });

    it('renders event startDate', async () => {
        const regex = new RegExp(`Formatted Date ${mockData[0].startDate}`, "i");
        const found = await screen.findByText(regex);
        expect(found).toBeInTheDocument();
    });


    it('renders event time', async () => {
        const regex = new RegExp(`Formatted Time ${mockData[0].startDate}`, "i");
        const found = await screen.findByText(regex);
        expect(found).toBeInTheDocument();
    });


    it('renders event street address and locality', () => {
        expect(screen.getByText(`${mockData[0].address.streetAddress}, ${mockData[0].address.addressLocality}`)).toBeInTheDocument();
    });

    it('renders price when priceFrom > 0', () => {
        const expectedText = `${mockData[0].priceFrom} Euro`;
        expect(screen.getByText(expectedText)).toBeInTheDocument();
    });
});

it('renders Pagination when data length is more than 8', () => {
    const mockLongData = new Array(9).fill(mockData[0]);
    render(
        <ThemeProvider theme={theme}>
            <ListView data={mockLongData} />
        </ThemeProvider>
    );
    expect(screen.getByTestId('pagination')).toBeInTheDocument();
});

it('renders "There is no results" when no data', () => {
    render(
        <ThemeProvider theme={theme}>
            <ListView data={[]} />
        </ThemeProvider>
    );
    expect(screen.getByText('There is no results')).toBeInTheDocument();
});
