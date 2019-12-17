import path from "path";

interface RawPost {
  metadata: {
    title: string;
    description: string;
    date: string;
    public: boolean;
    thumbnail?: string;
  };
  default: React.ReactNode;
}

export interface Post {
  url: string;
  title: string;
  description: string;
  date: Date;
  public: boolean;
  thumbnail?: string;
}

export const getPosts = (): Post[] => {
  // Context module exports require function that takes filename as argument
  const context = require.context("../pages", true, /\.mdx?$/);

  // Keys property returns array of filenames
  return context
    .keys()
    .map(key => {
      const { metadata }: RawPost = context(key);

      return {
        ...metadata,
        url: path.dirname(key) + "/" + path.basename(key, path.extname(key)),
        date: new Date(metadata.date)
      };
    })
    .filter(post => post.public)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
};
