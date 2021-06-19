import {
  createSlice,
  createEntityAdapter,
  PayloadAction,
} from '@reduxjs/toolkit'
import { UserStateType, UserType } from '../users'

export const userStateAdapter = createEntityAdapter<UserType|null>()

const initUserStateSliceState = userStateAdapter.getInitialState()

export const userSlice = createSlice({
  initialState: initUserStateSliceState,
  name: "User",
  reducers: {
    addState: (state,  action: PayloadAction<UserStateType>) => {
     userStateAdapter.setAll(state, action.payload)
    },
  },
})

export const userStateActions = userSlice.actions
export const userStateReducer = userSlice.reducer
