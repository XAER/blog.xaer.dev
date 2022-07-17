import Container from "./container";
import { PROJECT_PATH } from "../lib/constants";
import React from "react";
import { ThemeContext } from "../context/themeContext";
import classNames from "classnames";

const Footer = () => {
  const { theme } = React.useContext(ThemeContext);

  return (
    <footer
      className={classNames("border-t", {
        "bg-neutral-50 border-neutral-200": theme === "light",
        "bg-gray-900 border-neutral-500": theme === "dark",
      })}
    >
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <h3
            className={classNames(
              "text-4xl lg:text-[2.5rem] font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2",
              {
                "text-gray-900": theme === "light",
                "text-gray-100": theme === "dark",
              }
            )}
          >
            Thanks for reading!
          </h3>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <a
              href="https://xaer.dev"
              target="_blank"
              className={classNames(
                "mx-3 border font-bold py-3 px-12 lg:px-8 duration-200 transition-all mb-6 lg:mb-0",
                {
                  "bg-gray-900 hover:bg-gray-100 hover:text-gray-900 border-gray-900 text-gray-100":
                    theme === "light",
                  "bg-gray-100 hover:bg-gray-900 hover:text-gray-100 border-gray-100 text-gray-900":
                    theme === "dark",
                }
              )}
            >
              Visit my site
            </a>
            <a
              href={`https://github.com/XAER/${PROJECT_PATH}`}
              target="_blank"
              className={classNames("mx-3 font-bold hover:underline", {
                "text-gray-900": theme === "light",
                "text-gray-100": theme === "dark",
              })}
            >
              View on GitHub
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
