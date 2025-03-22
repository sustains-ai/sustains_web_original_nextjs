"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import { useBlogHeaders } from "../hooks";

const Item = ({ blog }: { blog: any }) => {

    const { image, title, description } = useBlogHeaders(blog.content);

    return (
        <div
            className="mb-4 flex items-center gap-6 xl:flex-nowrap 2xl:gap-6"
            key={blog.id}
        >
            <div className="relative h-20 w-20 rounded-full block aspect-[513/344]">
                <Image src={image} alt="Blog" fill className="rounded-full" />
            </div>
            <h5 className="text-md font-semibold text-black transition-all duration-300 hover:text-primary">
                <Link href={`/blog/${blog.id}`}>
                    {title.slice(0, 40)}...
                </Link>
            </h5>
        </div>
    );
}

const RelatedPost = ({blogs}:{blogs: any}) => {
    return (
        <div className="animate_top rounded-md border border-stroke bg-white p-5 shadow-solid-13">
            <h4 className="mb-7.5 text-2xl font-semibold text-black">
                Latest Posts
            </h4>

            <div>
                {blogs.slice(0, 3).map((blog: any, index: number) => {
                    return (
                        <div key={blog.id}>
                            <Item blog={blog} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default RelatedPost;