import Link from "next/link";

const Header = () => {
  return (
    <div className="pt-8 pb-4">
      <Link
        href="/"
        className="font-mono text-xs text-muted hover:text-primary transition-colors duration-150"
      >
        &larr; back
      </Link>
    </div>
  );
};

export default Header;
