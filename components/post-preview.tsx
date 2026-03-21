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

const PostPreview = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) => {
  return (
    <Link
      href={`/posts/${slug}`}
      className="group flex items-start justify-between gap-4 py-3 px-4 -mx-4 rounded-[6px] border border-transparent hover:border-subtle-accent hover:bg-accent-dim transition-all duration-150"
    >
      <span className="text-sm text-primary font-medium group-hover:text-accent transition-colors duration-150 leading-relaxed">
        {title}
      </span>
      <DateFormatter dateString={date} />
    </Link>
  );
};

export default PostPreview;
