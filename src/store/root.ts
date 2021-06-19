import { combineReducers } from "@reduxjs/toolkit";

import { usersReducer } from "./users";
import { allowanceDefinitionReducer } from './allowance/allowanceDefinition.slice'
import { allowanceStateReducer } from './allowance/allowanceState.slice'

export enum StoreKeys {
  Users = "Users",
  AllowanceDefinition = 'AllowanceDefinition',
  AllowanceState = 'AllowanceState',
}

export const rootReducer = combineReducers({
  [StoreKeys.Users]: usersReducer,
  [StoreKeys.AllowanceDefinition]: allowanceDefinitionReducer,
  [StoreKeys.AllowanceState]: allowanceStateReducer,
});

export type StoreState = ReturnType<typeof rootReducer>;
