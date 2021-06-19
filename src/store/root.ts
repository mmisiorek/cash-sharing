import { combineReducers } from "@reduxjs/toolkit";

import { usersReducer } from "./users";

export enum StoreKeys {
  Users = "users",
}

export const rootReducer = combineReducers({
  [StoreKeys.Users]: usersReducer,
});

export type StoreState = ReturnType<typeof rootReducer>;
