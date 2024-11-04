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
    },
};

const theme = createTheme(themeOptions);

export default theme;
