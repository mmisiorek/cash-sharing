import {
  createSlice,
  createEntityAdapter,
  PayloadAction,
} from '@reduxjs/toolkit'
import { AllowanceDefinition, AllowanceDefinitionData } from './allowance.types'

export const allowanceDefinitionAdapter = createEntityAdapter<AllowanceDefinition>()

const initAllowanceDefinitionSliceState = allowanceDefinitionAdapter.getInitialState()

export const allowanceDefinitionSlice = createSlice({
  initialState: initAllowanceDefinitionSliceState,
  name: "AllowanceDefinition",
  reducers: {
    addDefinition: (state,  _action: PayloadAction<AllowanceDefinitionData>) => state,
    addDefinitionToStore: (state,  action: PayloadAction<AllowanceDefinition>) => {
      allowanceDefinitionAdapter.addOne(state, action.payload)
      return state
    },
  },
})

export const allowanceDefinitionActions = allowanceDefinitionSlice.actions
export const allowanceDefinitionReducer = allowanceDefinitionSlice.reducer
