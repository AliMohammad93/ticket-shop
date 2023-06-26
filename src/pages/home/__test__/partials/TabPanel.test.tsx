import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TabPanel from "../../partials/TabPanel";
import {ThemeProvider} from "@mui/material/styles";
import theme from "../../../../config/theme";
describe('TabPanel Component', () => {
    const childText = "Child Component";

    it('renders children when value equals index', () => {
        render(
                <ThemeProvider theme={theme}>
                    <TabPanel value={1} index={1}>{childText}</TabPanel>
                </ThemeProvider>
        );
        expect(screen.getByText(childText)).toBeInTheDocument();
    });

    it('does not render children when value does not equal index', () => {
        render(
                <ThemeProvider theme={theme}>
                    <TabPanel value={1} index={2}>{childText}</TabPanel>
                </ThemeProvider>
        );
        expect(screen.queryByText(childText)).toBeNull();
    });
});
