// Copyright © 2025 Sustains AI, All Rights Reserved
import { createReducer, resetState } from "../store/typeSafe";
import { resetReducersAction } from "./actions";

const initialState = {

};

export interface sessionReducerStateType {
  type: string;
}

export const sessionReducer: any = createReducer(initialState)
  .handleAction(resetReducersAction, resetState(initialState));

