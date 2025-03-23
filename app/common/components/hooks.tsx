import { useSelector } from "react-redux"

export const useIsAdmin = (): boolean => {
    const isLoggedIn = useSelector((state: any) => state.login.isLoggedIn)
    const user = useSelector((state: any) => state.login.user)

    if (isLoggedIn && user?.email?.endsWith("sustains.ai")) {
        return true
    }

    return false
}

export const useBlogHeaders = (blog: any) => {
    let image;
    let title;
    let description = "";

    if (blog && blog.content) {
        for (const block of blog.content) {
            if (!image && block.type === "imageBlock") {
                image = block.attrs?.src || image;
            }
            if (!title && block.type === "heading") {
                title = block.content?.[0]?.text;
            }
            if (!description && block.type === "paragraph") {
                description = block.content?.map((textBlock: any) => textBlock.text).join(" ") || "";
            }
            if (image && title && description) break;
        }
    }

    if (!image) {
        image = "/images/default-image.jpg";
    }

    if (!title) {
        title = "Untitled blog";
    }

    return { image, title, description };
};
