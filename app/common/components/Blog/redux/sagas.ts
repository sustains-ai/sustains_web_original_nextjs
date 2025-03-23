import { getActionType } from "@/app/common/store/typeSafe";
import { call, debounce, put, takeLatest } from "redux-saga/effects";
import { addBlogAction, deleteBlogAction, deleteDraftedBlogAction, getBlogsAction, storeBlogsAction, updateBlogAction } from "./actions";
import { addBlogAPI, deleteBlogByIdAPI, getBlogsAPI, updateBlogByIdAPI } from "./api";
import { failedLoadingAction, startLoadingAction, successLoadingAction } from "@/app/common/loaderRedux/actions";
import { redirect } from "next/navigation";

export function* getBlogsSaga(): any {
    try {
        yield put(startLoadingAction({ name: "BlogList" }))
        const blogs = yield call(getBlogsAPI)
        yield put(storeBlogsAction(blogs))
        yield put(successLoadingAction({ name: "BlogList", msg: "" }))
    } catch (error: any) {
        yield put(failedLoadingAction({ name: "BlogList", msg: "" }))
        console.log("error in getBlogsSaga", error)
        if (error?.response?.data?.message) {
            alert(error.response.data.message)
        }
    }
}

export function* addBlogSaga(action: { payload: any }): any {
    try {
        yield put(startLoadingAction({ name: "BlogUpdate" }))
        const response = yield call(addBlogAPI, action.payload)
        yield call(getBlogsSaga)
        yield put(deleteDraftedBlogAction(action.payload.id))
        window.location.href = `/blog/${response.id}`
        yield put(successLoadingAction({ name: "BlogUpdate", msg: "" }))
    } catch (error: any) {
        yield put(failedLoadingAction({ name: "BlogUpdate", msg: "" }))
        console.log("error in addBlogSaga", error)
        if (error?.response?.data?.message) {
            alert(error.response.data.message)
        }
    }
}

export function* updateBlogSaga(action: { payload: any }): any {
    try {
        yield put(startLoadingAction({ name: "BlogUpdate" }))
        yield call(updateBlogByIdAPI, action.payload.id, action.payload)
        yield call(getBlogsSaga)
        yield put(deleteDraftedBlogAction(action.payload.id))
        window.location.href =`/blog/${action.payload.id}`
        yield put(successLoadingAction({ name: "BlogUpdate", msg: "" }))
    } catch (error: any) {
        yield put(failedLoadingAction({ name: "BlogUpdate", msg: "" }))
        console.log("error in updateBlogSaga", error)
        if (error?.response?.data?.message) {
            alert(error.response.data.message)
        }
    }
}

export function* deleteBlogSaga(action: { payload: any }): any {
    try {
        yield put(startLoadingAction({ name: "BlogList" }))
        yield call(deleteBlogByIdAPI, action.payload)
        yield call(getBlogsSaga)
        yield put(successLoadingAction({ name: "BlogList", msg: "" }))
    } catch (error: any) {
        yield put(failedLoadingAction({ name: "BlogList", msg: "" }))
        console.log("error in getBlogsSaga", error)
        if (error?.response?.data?.message) {
            alert(error.response.data.message)
        }
    }
}

export const blogSagas = [
    debounce(1000, getActionType(getBlogsAction), getBlogsSaga),
    takeLatest(getActionType(addBlogAction), addBlogSaga),
    takeLatest(getActionType(updateBlogAction), updateBlogSaga),
    takeLatest(getActionType(deleteBlogAction), deleteBlogSaga),
]