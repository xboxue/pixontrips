import path from "path";

interface RawPost {
  metadata: {
    title: string;
    description: string;
    date: string;
    public?: boolean;
    thumbnail?: string;
    featured?: boolean;
  };
  default: React.ComponentType;
}

export interface Post {
  id: string;
  path: string;
  title: string;
  description: string;
  date: Date;
  public?: boolean;
  thumbnail?: string;
  featured?: boolean;
  MDXDocument: React.ComponentType;
}

export const getPosts = (): Post[] => {
  // Context module exports require function that takes filename as argument
  const context = require.context("../../posts", true, /\.mdx?$/);

  // Keys property returns array of filenames
  return context
    .keys()
    .map(key => {
      const post: RawPost = context(key);

      return {
        ...post.metadata,
        id: path.basename(key, path.extname(key)),
        path: path.dirname(key),
        date: new Date(post.metadata.date),
        MDXDocument: post.default
      };
    })
    .filter(post => post.public)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
};

export const findPost = (id: string): Post =>
  getPosts().find(post => post.id === id);

export const getFeaturedPosts = (): Post[] =>
  getPosts().filter(post => post.featured);

export const getTripPosts = (): Post[] =>
  getPosts().filter(post => path.basename(post.path) === "trips");
