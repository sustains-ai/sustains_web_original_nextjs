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
import { useIsAdmin } from "../common/components/hooks";
import { useSearchParams } from "next/navigation";
import { BLOG_TYPES } from "../common/constants";
import { loaderSelector } from "../common/loaderRedux/selectors";
import { LoadingIndicator } from "../common/components/LoadingIndicator/LoadingIndicator";

const Blog = () => {

  const searchParams = useSearchParams();
  const category = searchParams.get("category") ?? "";

  const isCategoryValid = category.trim() !== ""

  const dispatch = useDispatch()
  const { loading }: { loading: boolean } = useSelector(loaderSelector("BlogList"))
  const isAdmin = useIsAdmin()

  React.useEffect(() => {
    dispatch(getBlogsAction())
  }, [])

  const blogs = useSelector((store: any) => store.blog.blogs)
  const draftedBlogs = useSelector((store: any) => store.blog.draftedBlog)

  let allBlogs = [...draftedBlogs]

  const draftedBlogIds = draftedBlogs.map((blog: any) => blog.id)
  const validBlogs = blogs.filter((blog: any) => !draftedBlogIds.includes(blog.id))
  allBlogs = [...allBlogs, ...validBlogs]
    if(isCategoryValid) {
    allBlogs = allBlogs.filter((blog) => blog.blog_type === category)
  }

  return (
    <section className="py-20 lg:py-25 xl:py-30">
      <LoadingIndicator loading={loading} />
      {
        isAdmin &&
        <Link href={`/blog/create-edit/${Date.now()}`}>
          <div className="flex justify-center items-center sm:block">
            <button
              className="relative sm:absolute sm:absolute sm:top:10 sm:right-10 px-3 py-3 bg-gradient-to-r from-[#089B45] to-[#0ABF53] text-white text-lg font-semibold rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 group">
              <Plus />
            </button>
          </div>
        </Link>
      }

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

      <div className="mx-auto mt-6 max-w-c-1280 px-4 md:px-8 xl:mt-20 xl:px-0">
        {allBlogs.length > 0 ? (
          <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
            {allBlogs.map((blog, key) => (
              <BlogItem blog={blog} key={key} />
            ))}
          </div>
        ) : (
          <div className="flex justify-center items-center h-64 text-gray-500 text-lg font-semibold">
            {loading ? "Loading..." : `No blogs available${isCategoryValid ? ` for category ${category}` : ""}`}
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;
