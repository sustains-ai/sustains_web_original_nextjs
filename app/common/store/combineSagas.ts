// Copyright © 2025 Sustains AI, All Rights Reserved
import { all } from "redux-saga/effects";
import { blogSagas } from "../components/Blog/redux/sagas";
import { loginSagas } from "../components/auth/redux/sagas";

export function *sagas() {
  yield all([
    ...blogSagas,
    ...loginSagas
  ]);
}
