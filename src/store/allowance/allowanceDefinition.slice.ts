import {
  createSlice,
  createEntityAdapter,
  PayloadAction,
} from '@reduxjs/toolkit'
import { AllowanceDefinition } from './allowance.types'

export const allowanceDefinitionAdapter = createEntityAdapter<AllowanceDefinition>()

const initAllowanceDefinitionSliceState = allowanceDefinitionAdapter.getInitialState()

export const allowanceDefinitionSlice = createSlice({
  initialState: initAllowanceDefinitionSliceState,
  name: "AllowanceDefinition",
  reducers: {
    addDefinition: (state,  _action: PayloadAction<AllowanceDefinition>) => state,
  },
})

export const allowanceDefinitionActions = allowanceDefinitionSlice.actions
export const allowanceDefinitionReducer = allowanceDefinitionSlice.reducer
