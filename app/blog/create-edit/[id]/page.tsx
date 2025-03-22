"use client"

import { addBlogAction, deleteDraftedBlogAction, getBlogAction, getBlogsAction, updateBlogAction } from "@/app/common/components/Blog/redux/actions";
import Editor from "@/app/common/components/Editor"
import { BlockEditor } from "@/app/common/components/Editor/components/BlockEditor";
import { Icon } from "@/app/common/components/Editor/components/ui/Icon";
import { Surface } from "@/app/common/components/Editor/components/ui/Surface";
import { Toolbar } from "@/app/common/components/Editor/components/ui/Toolbar";
import TiptapEditor from "@/app/common/components/Editor/Editor";
import { useIsAdmin } from "@/app/common/components/hooks";
import { LoadingIndicator } from "@/app/common/components/LoadingIndicator/LoadingIndicator";
import { loaderSelector } from "@/app/common/loaderRedux/selectors";
import { Check, X } from "lucide-react";
import { redirect } from "next/navigation";
import React from "react";
import { createPortal } from "react-dom";
import { useDispatch, useSelector } from "react-redux";

const useDarkmode = () => {
    const [isDarkMode, setIsDarkMode] = React.useState<boolean>(
        typeof window !== 'undefined' ? window.matchMedia('(prefers-color-scheme: dark)').matches : false,
    )

    React.useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
        const handleChange = () => setIsDarkMode(mediaQuery.matches)
        mediaQuery.addEventListener('change', handleChange)
        return () => mediaQuery.removeEventListener('change', handleChange)
    }, [])

    React.useEffect(() => {
        document.documentElement.classList.toggle('dark', false)
    }, [isDarkMode])

    const toggleDarkMode = React.useCallback(() => setIsDarkMode(isDark => !isDark), [])
    const lightMode = React.useCallback(() => setIsDarkMode(false), [])
    const darkMode = React.useCallback(() => setIsDarkMode(true), [])

    return {
        isDarkMode,
        toggleDarkMode,
        lightMode,
        darkMode,
    }
}

const CreateBlog = ({ params }: { params: Promise<{ id: string }> }) => {
    const { isDarkMode, darkMode, lightMode } = useDarkmode()

    const resolvedParams = React.use(params);

    const id = resolvedParams.id

    const dispatch = useDispatch()
    const { loading }: { loading: boolean } = useSelector(loaderSelector("BlogUpdate"))
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
        if (!isAdmin) {
            redirect("/blog")
        }
    }, [isAdmin])

    const DarkModeSwitcher = createPortal(
        <Surface className="flex items-center gap-1 fixed bottom-6 right-6 z-[99999] p-1">
            <Toolbar.Button onClick={lightMode} active={!isDarkMode}>
                <Icon name="Sun" />
            </Toolbar.Button>
            <Toolbar.Button onClick={darkMode} active={isDarkMode}>
                <Icon name="Moon" />
            </Toolbar.Button>
        </Surface>,
        document.body,
    )

    return (
        <div className="rounded-md shadow-solid-13">
            <LoadingIndicator loading={loading} />
            <>
                {/* {DarkModeSwitcher} */}
                <BlockEditor id={id} />
            </>
        </div>
    )
}

export default CreateBlog