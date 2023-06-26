import React from 'react';
import './App.css';
import Home from "./pages/home/Home";
import {ThemeProvider} from '@mui/material/styles';
import theme from "./config/theme";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Home/>
        </ThemeProvider>
    );
}

export default App;
