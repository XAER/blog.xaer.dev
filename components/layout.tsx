import React from "react";
import { ThemeContext } from "../context/themeContext";
import Alert from "./alert";
import Footer from "./footer";
import Meta from "./meta";
import cn from "classnames";
import Navbar from "./navbar";

type Props = {
  preview?: boolean;
  children: React.ReactNode;
};

const Layout = ({ preview, children }: Props) => {
  const { theme } = React.useContext(ThemeContext);

  return (
    <>
      <div
        className={cn("transition-colors ease-in duration-200 min-h-screen", {
          "bg-gray-100": theme === "light",
          "bg-gray-900": theme === "dark",
        })}
      >
        <Meta />
        <div>
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
