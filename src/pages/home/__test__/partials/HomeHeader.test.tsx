import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import HomeHeader from "../../partials/HomeHeader";
import i18n from "i18next";
import theme from "../../../../config/theme";
import {ThemeProvider} from '@mui/material/styles';
import {I18nextProvider} from 'react-i18next';

describe('HomeHeader Component', () => {
    it('renders HomeHeader component', () => {
        render(
            <I18nextProvider i18n={i18n}>
                <ThemeProvider theme={theme}>
                    <HomeHeader/>
                </ThemeProvider>
            </I18nextProvider>);
        expect(screen.getByAltText('logo')).toBeInTheDocument();
    });
});
