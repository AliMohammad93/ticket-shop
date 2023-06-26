import React from 'react';
import {ThemeProvider} from '@mui/material/styles';
import './App.css';
import Home from "./pages/home/Home";
import theme from "./config/material-ui/theme";
function App() {
    return (
        <ThemeProvider theme={theme}>
            <Home/>
        </ThemeProvider>
    );
}
export default App;
