import React from "react";

type Props = {
  children: React.ReactNode;
};

export const ThemeContext = React.createContext({
  theme: "light",
  toggleTheme: () => {},
  setRecurringVisitorTheme: () => {},
});

const ThemeProvider = (props: Props) => {
  const [theme, setTheme] = React.useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    updateTheme(theme === "light" ? "dark" : "light");
  };

  const updateTheme = (theme: string) => {
    localStorage.setItem("theme", theme);
  };

  const setRecurringVisitorTheme = () => {
    const visitorTheme = localStorage.getItem("theme");
    if (visitorTheme && visitorTheme !== "") {
      setTheme(visitorTheme);
    }
  };

  return (
    <ThemeContext.Provider
      value={{ theme, toggleTheme, setRecurringVisitorTheme }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
