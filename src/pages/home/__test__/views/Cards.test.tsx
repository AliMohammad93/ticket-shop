import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Cards from "../../partials/views/Cards";
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
jest.mock('../../../hooks/useFormattedDate', () => () => {
    return (dateStr: string) => `Formatted Date ${dateStr}`;
});
jest.mock('../../../hooks/useFormattedTime', () => () => {
    return (dateStr: string) => `Formatted Time ${dateStr}`;
});


const mockData = [
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

describe('Cards Component', () => {
    beforeEach(() => {
        render(
            <ThemeProvider theme={theme}>
                <Cards data={mockData}/>
            </ThemeProvider>
        );
    });

    it('renders event title', () => {
        expect(screen.getByText('Test Title')).toBeInTheDocument();
    });

    it('renders image with correct alt text', () => {
        expect(screen.getByAltText('Test Title')).toBeInTheDocument();
    });

    it('renders event startDate', () => {
        expect(screen.getByText(`Formatted Date ${mockData[0].startDate}`)).toBeInTheDocument();
    });

    it('renders event time', () => {
        expect(screen.getByText(`Formatted Time ${mockData[0].startDate}`)).toBeInTheDocument();
    });

    it('renders event street address and locality', () => {
        expect(screen.getByText(`${mockData[0].address.streetAddress}, ${mockData[0].address.addressLocality}`)).toBeInTheDocument();
    });


    it('renders price when priceFrom > 0', () => {
        const expectedText = `Tickets from ${mockData[0].priceFrom}€`;
        expect(screen.getByText(expectedText)).toBeInTheDocument();
    });

});

it('does not render price when price is not greater than 0', () => {
    const dataWithNoPriceFrom = [{...mockData[0], priceFrom: 0}];
    render(<ThemeProvider theme={theme}><Cards data={dataWithNoPriceFrom}/></ThemeProvider>);
    const expectedText = `Tickets from ${mockData[0].priceFrom}€`;
    expect(screen.queryByText(expectedText)).not.toBeInTheDocument();
});
