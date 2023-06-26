import {render, screen} from '@testing-library/react';
import React from 'react';
import Home from '../Home';
import theme from "../../../config/theme";
import {ThemeProvider} from '@mui/material/styles';


describe('Home', () => {
    it('renders cards by default', async () => {
        render(
                <ThemeProvider theme={theme}>
                    <Home/>
                </ThemeProvider>
        )
        const listElement = screen.getByTitle('cards');
        expect(listElement).toBeInTheDocument();
    });




});
