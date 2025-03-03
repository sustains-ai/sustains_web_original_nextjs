// Copyright © 2025 Sustains AI, All Rights Reserved
import { produce } from "immer"

export type actionType = () => {
  type: string
  payload?: any
}

export const getActionType = (action: actionType) => {
  return action().type
}

export const resetState = (initState: any) => (state: any) => {
  for (const key in initState) {
    if (Object.hasOwn(initState, key)) {
      state[key] = initState[key]
    }
  }
}

export const action = (type: string, payload?: any) => {
  return {
    type,
    payload
  }
}

export const createReducer = (initialState: any) => {
  const actionHandlers: any = {}

  const reducer: any = (state = initialState, calledAction: any) => {
    const handler = actionHandlers[calledAction.type]
    if (handler) {
      return produce(state, (stateState: any) => {
        handler(stateState, calledAction)
      })
    }

    return state
  }

  reducer.__proto__.handleAction = (action: any, handler: any) => {
    const actionName = getActionType(action)
    actionHandlers[actionName] = handler

    return reducer
  }

  return reducer
}
