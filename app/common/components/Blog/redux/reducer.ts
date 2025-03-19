import { resetReducersAction } from "@/app/common/sessionRedux/actions";
import { createReducer, resetState } from "@/app/common/store/typeSafe";
import { deleteDraftedBlogAction, storeBlogAction, storeBlogsAction, storeDraftedBlogAction } from "./actions";

const initialState = {
    blogs: [],
    draftedBlog: []
};

export interface blogReducerStateType {
    blogs: Array<any>
    draftedBlog: Array<any>
}

export const blogReducer: any = createReducer(initialState)
    .handleAction(
        storeBlogsAction,
        (state: blogReducerStateType, action: { payload: any }) => {
            state.blogs = action.payload
        }
    )
    .handleAction(
        storeBlogAction,
        (state: blogReducerStateType, action: { payload: any }) => {
            const index = state.blogs.findIndex((blog) => blog.id === action.payload.id)
            if (index !== -1) {
                state.blogs[index] = action.payload
            }
        }
    )
    .handleAction(
        storeDraftedBlogAction,
        (state: blogReducerStateType, action: { payload: any }) => {
            const index = state.draftedBlog.findIndex((blog) => blog.id === action.payload.id)
            if (index !== -1) {
                state.draftedBlog[index] = action.payload
            } else {
                state.draftedBlog.push(action.payload)
            }
        }
    )
    .handleAction(
        deleteDraftedBlogAction,
        (state: blogReducerStateType, action: { payload: any }) => {
            state.draftedBlog = state.draftedBlog.filter((blog) => blog.id !== action.payload)
        }
    )
    .handleAction(resetReducersAction, resetState(initialState));

