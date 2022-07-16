import classNames from "classnames";
import { parseISO, format } from "date-fns";
import React from "react";
import { ThemeContext } from "../context/themeContext";

type Props = {
  dateString: string;
};

const DateFormatter = ({ dateString }: Props) => {
  const { theme } = React.useContext(ThemeContext);

  const date = parseISO(dateString);
  return (
    <time
      dateTime={dateString}
      className={classNames("transition-all ease-in duration-100", {
        "text-gray-900": theme === "light",
        "text-gray-100": theme === "dark",
      })}
    >
      {format(date, "LLLL	d, yyyy")}
    </time>
  );
};

export default DateFormatter;
