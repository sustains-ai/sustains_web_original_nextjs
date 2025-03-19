"use client"

import { addBlogAction, deleteDraftedBlogAction, getBlogAction, getBlogsAction, updateBlogAction } from "@/app/common/components/Blog/redux/actions";
import Editor from "@/app/common/components/Editor"
import { useIsAdmin } from "@/app/common/components/hooks";
import { Check, X } from "lucide-react";
import { redirect } from "next/navigation";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const CreateBlog = ({ params }: { params: Promise<{ id: string }> }) => {

    const resolvedParams = React.use(params);

    const id = resolvedParams.id

    const dispatch = useDispatch()
    const savedData = useSelector((store: any) => store.blog.draftedBlog).find((blog: any) => blog.id === id)?.content ?? []
    const blogs = useSelector((store: any) => store.blog.blogs)
    const blogIds = blogs.map((blog: any) => blog.id)

    const handlePublish = () => {
        if (savedData?.blocks?.length > 0) {
            if (blogIds.includes(id)) {
                dispatch(updateBlogAction({ id, content: savedData }))
            } else {
                dispatch(addBlogAction({ id, content: savedData }))
            }
        }
    };

    const handleDiscard = () => {
        if (window.confirm("Are you sure you want to discard changes? This action cannot be undone.")) {
            dispatch(deleteDraftedBlogAction(id))
            window.location.href = "/blog"
        }
    };

    const isAdmin = useIsAdmin()

    React.useLayoutEffect(() => {
        if(!isAdmin){
          redirect("/blog")
        }
      }, [])

    return (
        <div className="animate_top rounded-md border border-stroke bg-white p-7.5 shadow-solid-13 md:p-10">
            <div className="top-4 right-4 flex gap-3 py-3">
                {/* Discard Button */}
                <button
                    onClick={handleDiscard}
                    className="bg-gray-500 hover:bg-gray-700 text-white text-sm px-4 py-2 rounded flex items-center gap-2"
                >
                    <X size={16} /> Discard
                </button>

                {/* Publish Button */}
                <button
                    onClick={handlePublish}
                    className="bg-green-500 hover:bg-green-600 text-white text-sm px-4 py-2 rounded flex items-center gap-2"
                >
                    <Check size={16} /> Publish
                </button>
            </div>

            <Editor id={id} readOnly={false} />
        </div>
    )
}

export default CreateBlog