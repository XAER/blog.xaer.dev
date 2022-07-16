import classNames from "classnames";
import React from "react";
import { ThemeContext } from "../context/themeContext";

type Props = {
  name: string;
  picture: string;
};

const Avatar = ({ name, picture }: Props) => {
  const { theme } = React.useContext(ThemeContext);

  return (
    <div className="flex items-center">
      <img src={picture} className="w-12 h-12 rounded-full mr-4" alt={name} />
      <div
        className={classNames(
          "text-xl font-bold transition-all ease-in duration-100",
          {
            "text-gray-900": theme === "light",
            "text-gray-100": theme === "dark",
          }
        )}
      >
        {name}
      </div>
    </div>
  );
};

export default Avatar;
