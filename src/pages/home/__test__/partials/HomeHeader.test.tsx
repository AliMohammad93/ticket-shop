import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import HomeHeader from "../../partials/HomeHeader";
import theme from "../../../../config/theme";
import {ThemeProvider} from '@mui/material/styles';
describe('HomeHeader Component', () => {
    it('renders HomeHeader component', () => {
        render(
                <ThemeProvider theme={theme}>
                    <HomeHeader/>
                </ThemeProvider>
          );
        expect(screen.getByAltText('logo')).toBeInTheDocument();
    });
});
