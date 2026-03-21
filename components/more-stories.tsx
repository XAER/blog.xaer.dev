import PostPreview from "./post-preview";
import type Post from "../interfaces/post";

type Props = {
  posts: Post[];
};

const MoreStories = ({ posts }: Props) => {
  return (
    <section className="py-14">
      <div className="flex items-center gap-3 mb-6">
        <span className="font-mono text-xs text-accent">03</span>
        <span className="text-[18px] text-primary font-medium">more posts</span>
        <div className="flex-1 h-px bg-subtle" />
      </div>
      <div className="flex flex-col">
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
