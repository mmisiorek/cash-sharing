import {
  createSlice,
  createEntityAdapter,
  PayloadAction,
  Update,
} from '@reduxjs/toolkit'
import { UserStateType, UserType } from '../users'

export const userStateAdapter = createEntityAdapter<UserType|null>()

const initUserStateSliceState = userStateAdapter.getInitialState()

export const userSlice = createSlice({
  initialState: initUserStateSliceState,
  name: "User",
  reducers: {
    addState: (state,  action: PayloadAction<UserStateType>) => {
     userStateAdapter.addOne(state, action.payload.user)
    },
    updateBalance: (state,  action: PayloadAction<UserType>) => {
      const {id, ...changes} = action.payload

      const update: Update<UserType> = {
        id,
        changes,
      }
      userStateAdapter.updateOne(state, update)
      return state
    },
  },
})

export const userStateActions = userSlice.actions
export const userStateReducer = userSlice.reducer
