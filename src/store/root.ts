import { combineReducers } from "@reduxjs/toolkit";

import { usersReducer, UsersStateType } from "./users";

export type RootState = {
  users: UsersStateType
}

export const rootReducer = combineReducers({
  users: usersReducer,
});
