import Container from "./container";
import { useContext } from "react";
import { FaSun } from "react-icons/fa";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { ThemeContext } from "../context/themeContext";
import cn from "classnames";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="">
      <Container>
        <div className="flex flex-col lg:flex-row justify-between items-center py-4">
          <div className="flex flex-col lg:flex-row items-center">
            <a
              href="/"
              className={cn(
                "text-3xl font-bold transition-colors ease-in duration-100",
                {
                  "text-gray-900": theme === "light",
                  "text-gray-100": theme === "dark",
                }
              )}
            >
              XAERdev
            </a>
          </div>
          <div className="flex flex-col lg:flex-row justify-center items-center">
            <a
              href="https://xaer.dev"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "font-bold transition-all ease-in duration-100 hover:text-fuchsia-700 hover:text-lg",
                {
                  "text-gray-900 ": theme === "light",
                  "text-gray-100": theme === "dark",
                }
              )}
            >
              My site
            </a>
            <div
              className={cn(
                "mx-3 font-bold transition-all ease-in duration-100",
                {
                  "text-gray-900 hover:text-fuchsia-700 hover:text-lg":
                    theme === "light",
                  "text-gray-100": theme === "dark",
                }
              )}
            >
              |
            </div>
            <div>
              {theme === "light" ? (
                <FaSun
                  onClick={toggleTheme}
                  size={24}
                  className="cursor-pointer text-yellow-500 transition-all ease-in duration-75"
                />
              ) : (
                <BsFillMoonStarsFill
                  onClick={toggleTheme}
                  size={24}
                  className="text-yellow-200 cursor-pointer transition-all ease-in duration-75"
                />
              )}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
