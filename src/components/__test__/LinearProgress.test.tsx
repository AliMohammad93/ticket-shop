import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LinearProgress from '../LinearProgress';
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../config/theme";

describe('LinearProgress Component', () => {
    it('renders LinearProgress component', () => {
        render(
            <ThemeProvider theme={theme}>
                <LinearProgress />
            </ThemeProvider>
        );
        expect(screen.getByRole('progressbar')).toBeInTheDocument();
    });
});
