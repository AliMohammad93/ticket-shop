import React from 'react';
import './App.css';
import Home from "./pages/home/Home";
import {createTheme, ThemeProvider} from '@mui/material/styles';
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
function App() {
  return (
      <ThemeProvider theme={theme}>
        <Home/>
      </ThemeProvider>
  );
}

export default App;
