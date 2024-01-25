import React from 'react';
import ReactDOM from 'react-dom';
import { CartProvider } from '../src/shared/context/CartContext';
import App from './App';
import { createTheme, ThemeProvider } from '@mui/material';
import './index.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#f50057',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CartProvider>
        <App />
      </CartProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);