import Avatar from "./avatar";
import DateFormatter from "./date-formatter";
import CoverImage from "./cover-image";
import Link from "next/link";
import type Author from "../interfaces/author";
import React from "react";
import { ThemeContext } from "../context/themeContext";
import classNames from "classnames";

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
  const { theme } = React.useContext(ThemeContext);

  return (
    <div>
      <div className="mb-5">
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a
            className={classNames(
              "hover:underline transition-all ease-in duration-100",
              {
                "text-gray-900": theme === "light",
                "text-gray-100": theme === "dark",
              }
            )}
          >
            {title}
          </a>
        </Link>
      </h3>
      <div className="text-lg mb-4">
        <DateFormatter dateString={date} />
      </div>
      <p className={classNames("text-lg leading-relaxed mb-4 transition-all ease-in duration-100", {
        "text-gray-900": theme === "light",
        "text-gray-100": theme === "dark",
      })}>{excerpt}</p>
      <Avatar name={author.name} picture={author.picture} />
    </div>
  );
};

export default PostPreview;
