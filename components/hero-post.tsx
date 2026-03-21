import DateFormatter from "./date-formatter";
import Link from "next/link";
import type Author from "../interfaces/author";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

const HeroPost = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) => {
  return (
    <section className="py-14 border-b border-subtle">
      <div className="flex items-center gap-3 mb-6">
        <span className="font-mono text-xs text-accent">02</span>
        <span className="text-[18px] text-primary font-medium">latest</span>
        <div className="flex-1 h-px bg-subtle" />
      </div>
      <Link
        href={`/posts/${slug}`}
        className="group block rounded-[6px] border border-subtle hover:border-subtle-accent bg-surface hover:bg-accent-dim transition-all duration-150 overflow-hidden"
      >
        <div className="overflow-hidden">
          <img
            src={coverImage}
            alt={`Cover for ${title}`}
            className="w-full object-cover aspect-video group-hover:scale-[1.01] transition-transform duration-300"
          />
        </div>
        <div className="p-4">
          <div className="flex items-start justify-between gap-4 mb-2">
            <h3 className="text-sm text-primary font-medium group-hover:text-accent transition-colors duration-150">
              {title}
            </h3>
            <DateFormatter dateString={date} />
          </div>
          <p className="text-sm text-muted leading-relaxed line-clamp-2">
            {excerpt}
          </p>
        </div>
      </Link>
    </section>
  );
};

export default HeroPost;
