import { AppProps } from "next/app";
import React from "react";
import ThemeProvider, { ThemeContext } from "../context/themeContext";
import "../styles/index.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  const { theme, toggleTheme } = React.useContext(ThemeContext);
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
