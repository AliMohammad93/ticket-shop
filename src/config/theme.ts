import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    typography: {
        fontFamily: 'Vazirmatn, Arial, sans-serif',
    },
    palette: {
        primary: {
            main: '#000',
        },
        secondary: {
            main: '#fff',
        },
        info: {
            main: '#f2f2f2'
        }
    },
});

export default theme;