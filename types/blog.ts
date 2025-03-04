export type Author = {
  name: string;
  image: string;
  bio?: string;
  _id?: number | string;
  _ref?: number | string;
};

export type Blog = {
  id: number;
  title: string;
  slug?: any;
  description?: string;
  body?: string;
  image?: any;
  author?: Author;
  tags?: string[];
  publishedAt?: string;
  link: string
  content: Array<any>
  date: string
};
