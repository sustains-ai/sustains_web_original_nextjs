// Copyright © 2025 Sustains AI, All Rights Reserved
import { combineReducers } from "redux";
import { loaderReducer } from "../loaderRedux/reducer";
import { sessionReducer } from "../sessionRedux/reducer";

export const reducers: any = combineReducers({
  loader: loaderReducer,
  session: sessionReducer,
});
