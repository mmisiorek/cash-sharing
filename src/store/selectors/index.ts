import { createSelector } from "@reduxjs/toolkit";
import { StoreKeys, StoreState } from "../root";

export const selectReducer = <StoreKey extends StoreKeys>(
  storeKey: StoreKey
) => {
  return (store: StoreState): StoreState[StoreKey] => {
    return store[storeKey];
  };
};

export const usersSelector = createSelector(
  selectReducer(StoreKeys.Users),
  (reducerState) => reducerState.users
);

export const usersSelectorBesideActive = createSelector(
  [selectReducer(StoreKeys.Users), selectReducer(StoreKeys.User)],
  (usersReducerState, userReducerState) =>
    usersReducerState.users.filter((x) => x.id !== userReducerState.ids[0])
);

export const userSelector = createSelector(
  selectReducer(StoreKeys.User),
  (reducerState) => reducerState
);
