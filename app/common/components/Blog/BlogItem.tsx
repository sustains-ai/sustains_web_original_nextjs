"use client";

import { Blog } from "@/types/blog";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Pencil, Trash2 } from "lucide-react";
import { deleteBlogAction, deleteDraftedBlogAction } from "./redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useBlogHeaders, useIsAdmin } from "../hooks";

const BlogItem = ({ blog }: { blog: any }) => {
    const { image, title, description } = useBlogHeaders(blog.content);
    const user = useSelector((store: any) => store.login.user)

    const dispatch = useDispatch()
    const isAdmin = useIsAdmin()

    return (
        <motion.div
            variants={{
                hidden: {
                    opacity: 0,
                    y: -20,
                },
                visible: {
                    opacity: 1,
                    y: 0,
                },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            className="relative group animate_top rounded-lg bg-white p-2 shadow-solid-8 dark:bg-blacksection"
        >
            {/* Draft Label (Dual Style - Red & Grey) */}
            {blog.draft && (
                <div className="absolute top-2 left-2 z-50 flex justify-end p-2">
                    <span className="flex items-center gap-2 px-3 py-1 text-xs font-semibold rounded bg-yellow-200 text-gray-800 dark:bg-yellow-700 dark:text-yellow-300">
                        <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                        Draft
                    </span>
                </div>
            )}

            {blog.blog_type && (
                <div className="absolute top-2 left-2 z-50 flex justify-end p-2">
                    <span className="flex items-center gap-2 px-3 py-1 text-xs font-bold rounded bg-white">
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                        {blog.blog_type}
                    </span>
                </div>
            )}

            <Link href={`/blog/${blog.id}`} className="relative block aspect-[320/200]">
                <Image src={image} alt={title} fill />
            </Link>

            <div className="px-4">
                <h3 className="mb-3.5 mt-7.5 line-clamp-2 inline-block text-lg font-semibold text-black duration-300 hover:text-primary dark:text-white dark:hover:text-primary xl:text-itemtitle2">
                    <Link href={`/blog/${blog.id}`}>
                        {`${title.slice(0, 40)}...`}
                    </Link>
                </h3>
                <p className="line-clamp-3">{description}</p>
            </div>

            {
                isAdmin && blog?.author?.email === user.email &&
                <div className="absolute top-2 right-2 z-50 flex items-center gap-3 p-2 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {/* Edit Button */}
                    <Link
                        href={`/blog/create-edit/${blog.id}`}
                        className="bg-green-500 hover:bg-green-600 text-white text-sm px-4 py-2 rounded flex items-center gap-2"
                    >
                        <Pencil size={16} />
                    </Link>

                    {/* Delete Button with Confirmation */}
                    <button
                        onClick={() => {
                            if (window.confirm("Are you sure you want to delete this blog? This action cannot be undone.")) {
                                if (blog.draft) {
                                    dispatch(deleteDraftedBlogAction(blog.id))
                                } else {
                                    dispatch(deleteBlogAction(blog.id))
                                }
                            }
                        }}
                        className="bg-red-500 hover:bg-red-600 text-white text-sm px-4 py-2 rounded flex items-center gap-2"
                    >
                        <Trash2 size={16} />
                    </button>
                </div>
            }

        </motion.div>
    );
};

export default BlogItem;