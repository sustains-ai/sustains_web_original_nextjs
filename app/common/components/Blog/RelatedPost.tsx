"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import BlogData from "./blogData";

const RelatedPost = () => {
    return (
        <div className="animate_top rounded-md border border-stroke bg-white p-5 shadow-solid-13">
            <h4 className="mb-7.5 text-2xl font-semibold text-black">
                Related Posts
            </h4>

            <div>
                {BlogData.slice(0, 3).map((post, key) => {
                    // Resolve image to a string
                    const imageSrc = typeof post.image === "string" ? post.image : post.image?.src || "/default-image.jpg";

                    return (
                        <div
                            className="mb-7.5 flex gap-4 xl:flex-nowrap 2xl:gap-6"
                            key={key}
                        >
                            <div className="max-w-45 relative h-18 w-30">
                                {post.image ? (
                                    <Image src={imageSrc} alt="Blog" fill />
                                ) : (
                                    "No image"
                                )}
                            </div>
                            <h5 className="text-md font-semibold text-black transition-all duration-300 hover:text-primary">
                                <Link href={`/blog/${post.link}`}>
                                    {post.title.slice(0, 40)}...
                                </Link>
                            </h5>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default RelatedPost;