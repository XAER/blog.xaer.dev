import PostPreview from "./post-preview";
import type Post from "../interfaces/post";
import cn from "classnames";
import React from "react";
import { ThemeContext } from "../context/themeContext";

type Props = {
  posts: Post[];
};

const MoreStories = ({ posts }: Props) => {
  const { theme } = React.useContext(ThemeContext);

  return (
    <section>
      <h2 className={cn("mb-8 text-5xl md:text-7xl font-bold tracking-tighter leading-tight", {
        "text-gray-900": theme === "light",
        "text-gray-100": theme === "dark",
      })}>
        More Stories
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  );
};

export default MoreStories;
