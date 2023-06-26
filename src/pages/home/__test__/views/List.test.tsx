import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ListView from "../../partials/views/List";
import {ThemeProvider} from "@mui/material/styles";
import theme from "../../../../config/theme";


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

jest.mock("../../../hooks/usePagination", () => ({
    __esModule: true,
    default: (data: Array<any>) => ({
        currentData: () => data,
        jump: jest.fn()
    }),
}));

jest.mock("../../../hooks/useFormattedDate", () => ({
    __esModule: true,
    default: () => (dateString: string) => new Date(dateString).toISOString().split('T')[1].split('.')[0],
}));

jest.mock("../../../hooks/useFormattedTime", () => ({
    __esModule: true,
    default: () => (dateString: string) => new Date(dateString).toISOString().split('T')[1].split('.')[0],
}));

const mockData = [
    // Repeat this object 10 times to test the pagination
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
                <ListView data={mockData}/>
            </ThemeProvider>
        );
    });

    it('renders event title', () => {
        expect(screen.getByText('Test Title')).toBeInTheDocument();
    });

 // almost the same test lik cards .........

});

