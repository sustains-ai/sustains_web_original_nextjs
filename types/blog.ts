export type Author = {
  name: string;
  image: string | { src: string; alt?: string };
  bio?: string;
  _id?: number | string;
  _ref?: number | string;
};

export type ContentBlock = {
  type: "paragraph" | "heading" | "list";
  level?: number;
  text?: string;
  items?: string[];
  ordered?: boolean;
  value?: string; // Keep for backward compatibility if needed
};

export type Blog = {
  id?: number | string;
  title: string;
  slug?: string;
  description?: string;
  body?: string;
  image?: string | { src: string; alt?: string };
  author?: Author;
  tags?: string[];
  publishedAt?: string;
  link: string;
  content: ContentBlock[];
  date: string | Date;
};