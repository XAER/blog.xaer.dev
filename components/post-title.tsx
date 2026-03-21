import React, { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

const PostTitle = ({ children }: Props) => {
  return (
    <h1 className="text-2xl md:text-3xl font-medium text-primary leading-tight mb-6 mt-4">
      {children}
    </h1>
  );
};

export default PostTitle;
