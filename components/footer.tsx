import Container from "./container";
import { PROJECT_PATH } from "../lib/constants";

const Footer = () => {
  return (
    <footer className="relative z-10 border-t border-subtle mt-8">
      <Container>
        <div className="py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-mono text-xs text-muted">
            &copy; {new Date().getFullYear()} XAERdev
          </span>
          <div className="flex items-center gap-6">
            <a
              href="https://xaer.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-muted hover:text-primary transition-colors duration-150"
            >
              xaer.dev
            </a>
            <a
              href={`https://github.com/XAER/${PROJECT_PATH}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-muted hover:text-primary transition-colors duration-150"
            >
              github
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
