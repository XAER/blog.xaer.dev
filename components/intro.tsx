import { CMS_NAME } from "../lib/constants";

const Intro = () => {
  return (
    <section className="py-14 border-b border-subtle">
      <div className="flex items-center gap-3 mb-6">
        <span className="font-mono text-xs text-accent">01</span>
        <span className="text-[18px] text-primary font-medium">blog</span>
        <div className="flex-1 h-px bg-subtle" />
      </div>
      <p className="text-sm text-muted leading-relaxed max-w-md">
        A personal blog built with{" "}
        <a
          href="https://nextjs.org/"
          className="text-accent hover:underline transition-colors duration-150"
        >
          Next.js
        </a>{" "}
        and {CMS_NAME}. Thoughts, learnings, and guides.
      </p>
    </section>
  );
};

export default Intro;
