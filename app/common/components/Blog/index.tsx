"use client"

import React from "react";
import SectionHeader from "../SectionHeader";
import BlogItem from "./BlogItem";
import BlogData from "./blogData";
import { useSelector } from "react-redux";

const Blog = () => {
  const blogs = useSelector((store: any) => store.blog.blogs)

  return (
    <section className="py-20 lg:py-25 xl:py-30">
      <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
        {/* <!-- Section Title Start --> */}
        <div className="animate_top mx-auto text-center">
          <SectionHeader
            headerInfo={{
              title: `NEWS & BLOGS`,
              subtitle: `Latest News & Blogs`,
              description: `Stay updated with the newest trends, insights, and innovations. Explore in-depth articles, industry news, and expert opinions, keeping you informed and inspired. Whether it’s technology breakthroughs, creative ideas, or success stories — discover what’s happening now!`,
            }}
          />
        </div>
        {/* <!-- Section Title End --> */}
      </div>

      <div className="mx-auto mt-15 max-w-c-1280 px-4 md:px-8 xl:mt-20 xl:px-0">
        <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
          {blogs.slice(0, 3).map((blog: any, key: any) => (
            <BlogItem blog={blog} key={key} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
