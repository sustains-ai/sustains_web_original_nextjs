// @ts-nocheck
import { getActionType } from "@/app/common/store/typeSafe";
import { call, debounce, put, takeLatest } from "redux-saga/effects";
import { addBlogAction, deleteBlogAction, deleteDraftedBlogAction, getBlogsAction, storeBlogsAction, updateBlogAction } from "./actions";
import { addBlogAPI, deleteBlogByIdAPI, getBlogsAPI, updateBlogByIdAPI } from "./api";

export function *getBlogsSaga(): any {
    const blogs = yield call(getBlogsAPI)
    yield put(storeBlogsAction(blogs))
}

export function *addBlogSaga(action: { payload: any }): any {
    yield call(addBlogAPI, action.payload)
    yield call(getBlogsSaga)
    yield put(deleteDraftedBlogAction(action.payload.id))
    window.location.href = "/blog"
}

export function *updateBlogSaga(action: { payload: any }): any {
    yield call(updateBlogByIdAPI, action.payload.id, action.payload)
    yield call(getBlogsSaga)
    yield put(deleteDraftedBlogAction(action.payload.id))
    window.location.href = "/blog"
}

export function *deleteBlogSaga(action: { payload: any }): any {
    yield call(deleteBlogByIdAPI, action.payload)
    yield call(getBlogsSaga)
}

export const blogSagas = [
    debounce(1000, getActionType(getBlogsAction), getBlogsSaga),
    takeLatest(getActionType(addBlogAction), addBlogSaga),
    takeLatest(getActionType(updateBlogAction), updateBlogSaga),
    takeLatest(getActionType(deleteBlogAction), deleteBlogSaga),
]