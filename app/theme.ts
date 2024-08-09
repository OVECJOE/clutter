'use client';
import { GeistSans } from "geist/font/sans";
import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
    palette: {
        mode: 'dark'
    },
    typography: {
        fontFamily: GeistSans.style.fontFamily,
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: `
                body {
                    font-family: ${GeistSans.style.fontFamily};
                }
            `,
        },
    },
});

export default theme;