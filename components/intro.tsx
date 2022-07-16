import { CMS_NAME } from "../lib/constants";
import cn from "classnames";
import { useContext } from "react";
import { ThemeContext } from "../context/themeContext";

const Intro = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1
        className={cn(
          "text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8 transition-all duration-100",
          {
            "text-gray-900": theme === "light",
            "text-gray-100": theme === "dark",
          }
        )}
      >
        Welcome to my blog
      </h1>
      <h4
        className={cn(
          "text-center md:text-left text-lg mt-5 md:pl-8 transition-all duration-100",
          {
            "text-gray-900": theme === "light",
            "text-gray-100": theme === "dark",
          }
        )}
      >
        A personal blog, built using{" "}
        <a
          href="https://nextjs.org/"
          className="underline hover:text-violet-600 duration-200 transition-colors"
        >
          Next.js
        </a>{" "}
        and {CMS_NAME}.
      </h4>
    </section>
  );
};

export default Intro;
