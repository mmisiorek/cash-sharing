import { combineReducers } from "@reduxjs/toolkit";

import { usersReducer } from "./users";
import { allowanceDefinitionReducer } from './allowance/allowanceDefinition.slice'
import { allowanceStateReducer } from './allowance/allowanceState.slice'
import { userStateReducer } from "./user/userState.slice";

export enum StoreKeys {
  User = "User",
  Users = "Users",
  AllowanceDefinition = 'AllowanceDefinition',
  AllowanceState = 'AllowanceState',
}

export const rootReducer = combineReducers({
  [StoreKeys.User]: userStateReducer,
  [StoreKeys.Users]: usersReducer,
  [StoreKeys.AllowanceDefinition]: allowanceDefinitionReducer,
  [StoreKeys.AllowanceState]: allowanceStateReducer,
});

export type StoreState = ReturnType<typeof rootReducer>;
