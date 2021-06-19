import { combineReducers } from "@reduxjs/toolkit";

import { messagesReducer } from "./messages";

export const rootReducer = combineReducers({
    messages: messagesReducer
})