import { call, put, takeLatest } from "redux-saga/effects"
import { LoginActionType, RegisterActionType, loggedInSuccessfullyAction, loginAction, logoutAction, registerAction, storeUserDetailsAction } from "./actions"
import { loginAPI, registerAPI, userDetailsAPI } from "./apis"
import { failedLoadingAction, startLoadingAction, successLoadingAction } from "@/app/common/loaderRedux/actions"
import { resetReducersAction } from "@/app/common/sessionRedux/actions"
import { getActionType } from "@/app/common/store/typeSafe"

export function *loginSaga(action: {payload: LoginActionType}): any {
  try {
    yield put(startLoadingAction({ name: "Login" }))
    const response = yield call(loginAPI, { payload: action.payload })
    const userDetails = response ?? {}
    if (userDetails.id) {
      const response = yield call(userDetailsAPI, { userId: userDetails.id })
      yield put(storeUserDetailsAction({ ...userDetails, ...response }))
    }

    yield put(loggedInSuccessfullyAction())
    yield put(successLoadingAction({ name: "Login", msg: "" }))
  } catch (error: any) {
    yield put(failedLoadingAction({ name: "Login", msg: "" }))
    console.log("error in loginSaga", error)
    if (error?.response?.data?.message) {
      alert(error.response.data.message)
    }
  }
}

export function *registerSaga(action: {payload: RegisterActionType}): any {
  try {
    yield put(startLoadingAction({ name: "Register" }))
    const response = yield call(registerAPI, { payload: action.payload })
    window.location.href = "/signin"
    if (response?.message) {
      alert(response.message)
    }
    yield put(successLoadingAction({ name: "Register", msg: "" }))
  } catch (error: any) {
    yield put(failedLoadingAction({ name: "Register", msg: "" }))
    console.log("error in registerSaga", error)
    window.location.href = "/signin"
    if (error?.response?.data?.message) {
      alert(error.response.data.message)
    }
  }
}

export function *logoutSaga(): any {
  try {
    yield put(startLoadingAction({ name: "Logout" }))
    yield put(resetReducersAction())
    yield put(successLoadingAction({ name: "Logout", msg: "" }))
  } catch (error: any) {
    console.log("error in logoutSaga", error)
    yield put(failedLoadingAction({ name: "Logout", msg: "" }))
  }
}

export const loginSagas = [
  takeLatest(getActionType(loginAction), loginSaga),
  takeLatest(getActionType(logoutAction), logoutSaga),
  takeLatest(getActionType(registerAction), registerSaga)
];
