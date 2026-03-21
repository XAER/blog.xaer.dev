import React, { useEffect } from "react";
import { ThemeContext } from "../context/themeContext";
import Alert from "./alert";
import Footer from "./footer";
import Meta from "./meta";
import Navbar from "./navbar";

type Props = {
  preview?: boolean;
  children: React.ReactNode;
};

const Layout = ({ preview, children }: Props) => {
  const { theme } = React.useContext(ThemeContext);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <>
      <div className="min-h-screen bg-bg relative">
        <Meta />
        <div className="relative z-10">
          <Alert showAlert={preview} />
          <Navbar />
          <main>{children}</main>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
