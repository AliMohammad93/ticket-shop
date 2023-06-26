import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TapActions from "../../partials/TapActions";
import {ThemeProvider} from '@mui/material/styles';
import theme from "../../../../config/material-ui/theme";
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
const setValue = jest.fn();
const setSearchTerm = jest.fn();
const selectedTap = 0;
describe('TapActions Component', () => {
    beforeEach(() => {
        render(
            <ThemeProvider theme={theme}>
                <TapActions
                    selectedTap={selectedTap}
                    handleChange={(event, newValue) => setValue(newValue)}
                    setSearchTerm={setSearchTerm}
                />
            </ThemeProvider>
        );
    });

    it('displays "Tickets for Bootshaus" when value is not 2', () => {
        expect(screen.getByText('Tickets for Bootshaus')).toBeInTheDocument();
    });

    it('handles tab change', () => {
        const tabButton = screen.getByLabelText('list');
        fireEvent.click(tabButton);
        expect(setValue).toHaveBeenCalledWith(1);
    });

    it('handles search input change', () => {
        const searchInput = screen.getByRole('textbox');
        fireEvent.change(searchInput, {target: {value: 'New search term'}});
        expect(setSearchTerm).toHaveBeenCalledWith('New search term');
    });

});

it('dose not display "Tickets for Bootshaus" when tap value 2 "on calender view"', () => {
    render(
            <ThemeProvider theme={theme}>
                <TapActions
                    selectedTap={2}
                    handleChange={(event, newValue) => setValue(newValue)}
                    setSearchTerm={setSearchTerm}
                />
            </ThemeProvider>
    )
    expect(screen.queryByText('Tickets for Bootshaus')).not.toBeInTheDocument();
});
