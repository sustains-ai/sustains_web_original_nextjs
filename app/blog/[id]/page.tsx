"use client"

import BlogData from "@/app/common/components/Blog/blogData";
import RelatedPost from "../../common/components/Blog/RelatedPost";
import Image from "next/image";
import { Blog } from "@/types/blog";
import Editor from "@/app/common/components/Editor";
import React from "react";
import { useSelector } from "react-redux";
import BlockReadOnly from "@/app/common/components/Editor/components/BlockEditor/BlockReadOnly";
import { Button, Chip } from "@mui/material";
import Link from "next/link";
import { BLOG_TYPES } from "@/app/common/constants";

const SingleBlogPage = ({ params }: { params: Promise<{ id: string }> }) => {
    const resolvedParams = React.use(params);
    const id = resolvedParams.id;

    const blogs = useSelector((store: any) => store.blog.blogs) ?? []
    const draftedBlogs = useSelector((store: any) => store.blog.draftedBlog)

    const allBlogs = [...draftedBlogs, ...blogs]

    const blog = allBlogs.find((blog: any) => blog.id === id)

    if (!blog) {
        return null;
    }

    const imageSrc = typeof blog.image === "string" ? blog.image : blog.image?.src || "/default-image.jpg";
    const dateString = blog.date instanceof Date ? blog.date.toISOString().split("T")[0] : blog.date;

    const latestBlogs = blogs.filter((blog: any) => blog.id !== id) ?? []
    console.log(latestBlogs)

    return (
        <div className="flex flex-col sm:flex-row animate_top rounded-md border border-stroke bg-white shadow-solid-13 mt-5 py-2">
            {/* Main Content */}
            <div className="sm:flex-[3] w-full">
                <BlockReadOnly id={id} />
            </div>

            {/* Sidebar */}
            <div className="sm:flex-[1] w-full sm:mt-0 mt-10 sm:ml-6 px-4">
                {latestBlogs.length > 0 && <RelatedPost blogs={latestBlogs} />}

                {/* Categories Section */}
                <div className="animate_top mt-6 rounded-md border border-stroke bg-white p-5 shadow-solid-13">
                    <h4 className="mb-6 text-2xl font-semibold text-black">Categories</h4>
                    <ul className="max-h-80 overflow-y-auto border border-gray-300 rounded-lg p-4">
                        {BLOG_TYPES.map((type: string, index: number) => (
                            <li key={index} className="py-2">
                                <Link href={`/blog?category=${type}`}>
                                    <button className="w-full px-4 py-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full transition-all duration-300 hover:bg-primary hover:text-white">
                                        {type}
                                    </button>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
};

export default SingleBlogPage;