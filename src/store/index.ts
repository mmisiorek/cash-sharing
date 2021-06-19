import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import createSagaMiddleware from "redux-saga";

import { rootReducer } from "./root";

export const sagaMiddleware = createSagaMiddleware()

export const getStore = () => {
    const store = configureStore({
        devTools: true,
        reducer: rootReducer,
        middleware: [
            ...getDefaultMiddleware({ serializableCheck: false, thunk: false }),
            sagaMiddleware,
        ],
    })

    return store
}


export const store = getStore()