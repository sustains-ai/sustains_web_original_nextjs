"use client";

import { Blog } from "@/types/blog";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Pencil, Trash2 } from "lucide-react";
import { deleteBlogAction, deleteDraftedBlogAction } from "./redux/actions";
import { useDispatch } from "react-redux";
import { useIsAdmin } from "../hooks";

const extractBlogData = (blog: any) => {
    let image; // Fallback image
    let title;
    let description;

    if (blog && blog.blocks) {
        for (const block of blog.blocks) {
            if (!image && block.type === "image") {
                image = block.data.file?.url || block.data.url || image;
            }
            if (!title && (block.type === "header")) {
                title = block.data.text;
            }
            if (!description && block.type === "paragraph") {
                description = block.data.text;
            }
            if (image && title && description) break;
        }
    }

    return { image, title, description };
};


const BlogItem = ({ blog }: { blog: any }) => {
    const { image = "/images/default-image.jpg", title = "Untitled blog", description } = extractBlogData(blog.content);

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
            className="animate_top rounded-lg bg-white p-4 pb-9 shadow-solid-8 dark:bg-blacksection"
        >
            {/* Draft Label (Dual Style - Red & Grey) */}
            {blog.draft && (
                <div className="relative flex justify-end py-2">
                    <span className="flex items-center gap-2 px-3 py-1 text-xs font-semibold rounded bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-300">
                        <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                        Draft
                    </span>
                </div>
            )}

            <Link href={`/blog/${blog.id}`} className="relative block aspect-[368/239]">
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
                isAdmin &&
                <div className="px-3 flex items-center gap-3">
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