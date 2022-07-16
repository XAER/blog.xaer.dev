import classNames from "classnames";
import Link from "next/link";
import React from "react";
import { ThemeContext } from "../context/themeContext";

const Header = () => {
  const { theme } = React.useContext(ThemeContext);

  return (
    <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
      <Link href="/">
        <a
          className={classNames(
            "hover:underline transition-all duration-100 ease-in",
            {
              "text-gray-900": theme === "light",
              "text-gray-100": theme === "dark",
            }
          )}
        >
          {"‹"}
        </a>
      </Link>
    </h2>
  );
};

export default Header;
