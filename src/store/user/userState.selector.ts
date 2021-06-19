import {
  createSelector,
} from '@reduxjs/toolkit'
import { StoreKeys } from '../root';
import { selectReducer } from '../utils';
import { userStateAdapter } from './userState.slice';

export const selectActiveUser = createSelector(
  selectReducer(StoreKeys.User), (state) => 
  userStateAdapter.getSelectors().selectAll(state)[0]
)
