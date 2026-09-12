import type { AppProps } from "next/app";
import { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { light } from "../scss/MaterialTheme";

export default function App({ Component, pageProps }: AppProps) {
  // @ts-expect-error: light obyektining tipi MUI'ning ThemeOptions bilan aniq mos kelmaydi, lekin bu kutilgan
  const [theme] = useState(createTheme(light));

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
