import {
  createSlice,
  createEntityAdapter,
  PayloadAction,
  Update,
} from '@reduxjs/toolkit'
import { AllowanceSpend, AllowanceState } from './allowance.types'

export const allowanceStateAdapter = createEntityAdapter<AllowanceState>()

const initAllowanceStateSliceState = allowanceStateAdapter.getInitialState()

export const allowanceDefinitionSlice = createSlice({
  initialState: initAllowanceStateSliceState,
  name: "AllowanceState",
  reducers: {
    addState: (state,  action: PayloadAction<AllowanceState>) => {
      allowanceStateAdapter.addOne(state, action.payload)
      return state;
    },
    spendAllowance: (state,  _action: PayloadAction<AllowanceSpend>) => state,
    updateState: (state, action: PayloadAction<AllowanceState>) => {
      const { id, ...changes } = action.payload
      const update: Update<AllowanceState> = {
        id,
        changes,
      }
      allowanceStateAdapter.updateOne(state, update)
      return state;
    }
  },
})

export const allowanceStateActions = allowanceDefinitionSlice.actions
export const allowanceStateReducer = allowanceDefinitionSlice.reducer
