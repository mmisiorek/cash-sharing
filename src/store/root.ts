import { combineReducers } from "@reduxjs/toolkit";

import { usersReducer } from "./users";

export const rootReducer = combineReducers({
  users: usersReducer,
});
