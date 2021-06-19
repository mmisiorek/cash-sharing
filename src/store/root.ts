import { combineReducers } from "@reduxjs/toolkit";

import { userReducer } from "./users";
import { allowanceDefinitionReducer } from './allowance/allowanceDefinition.slice'
import { allowanceStateReducer } from './allowance/allowanceState.slice'

export enum StoreKeys {
  Users = "Users",
  AllowanceDefinition = 'AllowanceDefinition',
  AllowanceState = 'AllowanceState',
}

export const rootReducer = combineReducers({
  [StoreKeys.Users]: userReducer,
  [StoreKeys.AllowanceDefinition]: allowanceDefinitionReducer,
  [StoreKeys.AllowanceState]: allowanceStateReducer,
});

export type StoreState = ReturnType<typeof rootReducer>;
