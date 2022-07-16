import classNames from "classnames";
import React from "react";
import { ThemeContext } from "../context/themeContext";
import markdownStyles from "./markdown-styles.module.css";

type Props = {
  content: string;
};

const PostBody = ({ content }: Props) => {
  const { theme } = React.useContext(ThemeContext);

  return (
    <div className="max-w-2xl mx-auto">
      <div
        className={classNames(
          markdownStyles["markdown"],
          "transition-all duration-100 ease-in",
          {
            "text-gray-900": theme === "light",
            "text-gray-100": theme === "dark",
          }
        )}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
};

export default PostBody;
