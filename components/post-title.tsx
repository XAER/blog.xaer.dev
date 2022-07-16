import React, { ReactNode } from "react";
import { ThemeContext } from "../context/themeContext";
import classNames from "classnames";

type Props = {
  children?: ReactNode;
};

const PostTitle = ({ children }: Props) => {
  const { theme } = React.useContext(ThemeContext);

  return (
    <h1
      className={classNames(
        "text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left transition-all duration-100 ease-in",
        {
          "text-gray-900": theme === "light",
          "text-gray-100": theme === "dark",
        }
      )}
    >
      {children}
    </h1>
  );
};

export default PostTitle;
