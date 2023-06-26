import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import {ThemeProvider} from "@mui/material/styles";
import theme from "../../config/material-ui/theme";
import CustomButton from "../CustomButton";
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

describe('CustomButton Component', () => {
    const handleButtonClick = jest.fn();
    beforeEach(() => {
        render(
            <ThemeProvider theme={theme}>
                <CustomButton shopUrl="http://testshopurl.com"/>
            </ThemeProvider>
        );
    });
    it('renders button', () => {
        expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('renders correct text', () => {
        expect(screen.getByText('To the tickets')).toBeInTheDocument();
    });
});
