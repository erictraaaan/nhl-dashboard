'use client';
import { createTheme, ThemeOptions } from '@mui/material/styles';
import { Ruda } from 'next/font/google';

const ruda = Ruda({
    weight: ['400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
});

export const themeOptions: ThemeOptions = {
    palette: {
        mode: 'light',
        primary: {
            main: '#00205B',
        },
        secondary: {
            main: '#e6a914',
        },
        background: {
            default: '#f7f3ea',
            paper: '#f9f6f6',
        },
    },
    typography: {
        fontFamily: ruda.style.fontFamily,
        h1: {
            fontSize: '3rem', // Adjust this value to reduce the size of h1
        },
        h2: {
            fontSize: '2.5rem', // Adjust this value to reduce the size of h2
        },
        h4: {
            fontSize: '1.5rem', // Adjust this value to reduce the size of h4
        },
        h5: {
            fontSize: '1rem', // Adjust this value to reduce the size of h5
        }
    },
    shape: {
        borderRadius: 5, // Change this value to your desired border radius
    },
};

const theme = createTheme(themeOptions);

export default theme;
