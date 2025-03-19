// Copyright © 2025 Sustains AI, All Rights Reserved
import { all } from "redux-saga/effects";
import { blogSagas } from "../components/Blog/redux/sagas";

export function *sagas() {
  yield all([
    ...blogSagas
  ]);
}
