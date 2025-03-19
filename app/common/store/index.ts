// Copyright © 2025 Sustains AI, All Rights Reserved
import { Tuple, configureStore } from "@reduxjs/toolkit"
import createSagaMiddleware from "redux-saga"
import { persistReducer, persistStore } from "redux-persist"
import storage from "redux-persist/lib/storage"
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2"
import { sagas } from "./combineSagas"
import { reducers } from "./combineReducers"

const persistConfig = {
  key: "root",
  whitelist: ["login", "blog"], // Only these reducers will be persisted.
  storage,
  stateReconciler: autoMergeLevel2
}

const persistedReducer = persistReducer(persistConfig, reducers)

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: () => new Tuple(sagaMiddleware)
})

export const persistor = persistStore(store)
sagaMiddleware.run(sagas)

store.subscribe(() => {
  console.log("Store Changed ", store.getState())
})
