import { useContext, useEffect } from "react";
import { ThemeContext } from "../context/themeContext";

export const useTheme = () => {
  const { theme, setRecurringVisitorTheme } = useContext(ThemeContext);

  useEffect(() => {
    setRecurringVisitorTheme();
  }, []);
};
