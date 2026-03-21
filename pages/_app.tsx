import { AppProps } from "next/app";
import React from "react";
import ThemeProvider, { ThemeContext } from "../context/themeContext";
import "../styles/index.css";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

export default function MyApp({ Component, pageProps }: AppProps) {
  const { theme, toggleTheme } = React.useContext(ThemeContext);
  return (
    <ThemeProvider>
      <div className={`${GeistSans.variable} ${GeistMono.variable} font-sans`}>
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}
