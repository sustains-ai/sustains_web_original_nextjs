import { action } from "@/app/common/store/typeSafe";

export const addBlogAction = (payload?: any): any => action("src/common/components/Blog/redux/actions/addBlogAction", payload);

export const getBlogsAction = (): any => action("src/common/components/Blog/redux/actions/getBlogsAction");

export const storeBlogsAction = (payload: any): any => action("src/common/components/Blog/redux/actions/storeBlogsAction", payload);

export const getBlogAction = (payload: any): any => action("src/common/components/Blog/redux/actions/getBlogAction", payload);

export const storeBlogAction = (payload: any): any => action("src/common/components/Blog/redux/actions/storeBlogAction", payload);

export const updateBlogAction = (payload?: any): any => action("src/common/components/Blog/redux/actions/updateBlogAction", payload);

export const deleteBlogAction = (payload?: any): any => action("src/common/components/Blog/redux/actions/deleteBlogAction", payload);

export const deleteDraftedBlogAction = (payload: any): any => action("src/common/components/Blog/redux/actions/deleteDraftedBlogAction", payload);

export const storeDraftedBlogAction = (payload: any): any => action("src/common/components/Blog/redux/actions/storeDraftedBlogAction", payload);
