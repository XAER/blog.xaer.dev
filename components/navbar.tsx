import Link from "next/link";
import { useContext } from "react";
import { FaSun } from "react-icons/fa";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { ThemeContext } from "../context/themeContext";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav
      className="sticky top-0 z-50 border-b border-subtle"
      style={{ background: "var(--navbar-bg)", backdropFilter: "blur(12px)" }}
    >
      <div className="max-w-content mx-auto px-6">
        <div className="flex items-center justify-between h-12">
          <Link href="/" className="font-mono text-sm leading-none">
            <span className="text-muted">~/blog.xaer</span>
            <span className="text-accent">.dev</span>
          </Link>
          <div className="flex items-center gap-6">
            <a
              href="https://xaer.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-muted hover:text-primary transition-colors duration-150"
            >
              xaer.dev
            </a>
            <button
              onClick={toggleTheme}
              className="text-muted hover:text-primary transition-colors duration-150"
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <FaSun size={13} />
              ) : (
                <BsFillMoonStarsFill size={13} />
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
