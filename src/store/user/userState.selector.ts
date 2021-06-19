import {
  createSelector,
} from '@reduxjs/toolkit'
import { StoreKeys } from '../root';
import { usersSelector } from '../selectors';
import { selectReducer } from '../utils';
import { userStateAdapter } from './userState.slice';

export const selectActiveUser = createSelector(
  [selectReducer(StoreKeys.User), usersSelector], (state, users) => {
    return userStateAdapter.getSelectors().selectAll(state)[0] || users[0]
  }
)
