"use client"

import React from "react";
import BlogData from "../common/components/Blog/blogData";
import BlogItem from "../common/components/Blog/BlogItem";
import SectionHeader from "../common/components/SectionHeader";
import { motion } from "framer-motion";
import { Plus } from 'lucide-react';
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { getBlogsAction } from "../common/components/Blog/redux/actions";

const Blog = () => {

  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(getBlogsAction())
  }, [])

  const blogs = useSelector((store: any) => store.blog.blogs)
  const draftedBlogs = useSelector((store: any) => store.blog.draftedBlog)

  const allBlogs = [...draftedBlogs]
  const draftedBlogIds = draftedBlogs.map((blog: any) => blog.id)
  blogs.map((blog: any) => {
    if (!draftedBlogIds.includes(blog.id)) {
      allBlogs.push(blog)
    }
  })

  return (
    <section className="py-20 lg:py-25 xl:py-30">
      <Link href={`/blog/create-edit/${Date.now()}`}>
        <button
          className="absolute top-30 right-6 sm:top-30 sm:right-10 md:top-30 md:right-12 lg:top-30 lg:right-16 gap-2 px-3 py-3 bg-gradient-to-r from-[#089B45] to-[#0ABF53] text-white text-lg font-semibold rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 group">
          <Plus />
        </button>
      </Link>
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
        {allBlogs.length > 0 ? (
          <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
            {allBlogs.map((blog, key) => (
              <BlogItem blog={blog} key={key} />
            ))}
          </div>
        ) : (
          <div className="flex justify-center items-center h-64 text-gray-500 text-lg font-semibold">
            No blogs available.
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;
