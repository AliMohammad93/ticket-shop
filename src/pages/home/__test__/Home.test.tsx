import {render, screen} from '@testing-library/react';
import React from 'react';
import Home from '../Home';
import theme from "../../../config/material-ui/theme";
import {ThemeProvider} from '@mui/material/styles';
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
describe('Home', () => {
    it('renders cards by default', async () => {
        render(
                <ThemeProvider theme={theme}>
                    <Home/>
                </ThemeProvider>
        )
        const listElement = await screen.findByTitle('cards');
        expect(listElement).toBeInTheDocument();
    });




});
