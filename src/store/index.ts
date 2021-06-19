import { createStore, applyMiddleware } from '@reduxjs/toolkit'
import createSagaMiddleware from "redux-saga";

import { rootReducer } from "./root";
import { mainSaga } from "../saga";

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(mainSaga)