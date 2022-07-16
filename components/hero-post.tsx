import Avatar from "./avatar";
import DateFormatter from "./date-formatter";
import CoverImage from "./cover-image";
import Link from "next/link";
import type Author from "../interfaces/author";
import { ThemeContext } from "../context/themeContext";
import React from "react";
import cn from "classnames";

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
  const { theme } = React.useContext(ThemeContext);

  return (
    <section>
      <div className="mb-8 md:mb-16">
        <CoverImage title={title} src={coverImage} slug={slug} />
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
        <div>
          <h3 className="mb-4 text-4xl lg:text-5xl leading-tight">
            <Link as={`/posts/${slug}`} href="/posts/[slug]">
              <a
                className={cn(
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
          <div className="mb-4 md:mb-0 text-lg">
            <DateFormatter dateString={date} />
          </div>
        </div>
        <div>
          <p
            className={cn(
              "text-lg leading-relaxed mb-4 transition-all ease-in duration-100",
              {
                "text-gray-900": theme === "light",
                "text-gray-100": theme === "dark",
              }
            )}
          >
            {excerpt}
          </p>
          <Avatar name={author.name} picture={author.picture} />
        </div>
      </div>
    </section>
  );
};

export default HeroPost;
