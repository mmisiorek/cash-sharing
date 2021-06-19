import {
  createSlice,
  createEntityAdapter,
  PayloadAction,
} from '@reduxjs/toolkit'
import { AllowanceState } from './allowance.types'

export const allowanceStateAdapter = createEntityAdapter<AllowanceState>()

const initAllowanceStateSliceState = allowanceStateAdapter.getInitialState()

export const allowanceDefinitionSlice = createSlice({
  initialState: initAllowanceStateSliceState,
  name: "AllowanceState",
  reducers: {
    addState: (state,  action: PayloadAction<AllowanceState>) => {
      allowanceStateAdapter.addOne(state, action.payload)
    },
  },
})

export const allowanceStateActions = allowanceDefinitionSlice.actions
export const allowanceStateReducer = allowanceDefinitionSlice.reducer
