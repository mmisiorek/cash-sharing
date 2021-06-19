import { PayloadAction } from '@reduxjs/toolkit';
import { select, call } from 'typed-redux-saga'

import { AllowanceDefinition, AllowanceExecution} from './allowance.types'
import { populateAllowanceStateSaga } from './populateAllowanceState.saga'

export function* addAllowanceDefinitionSaga(
  action: PayloadAction<AllowanceDefinition>,
): Generator {
  const allowanceDefinition = action.payload
  const allowanceExecution: AllowanceExecution = {
    durationDays: 7,
  }
  console.log('add allowance definition')

  yield* call(populateAllowanceStateSaga, allowanceDefinition, allowanceExecution)
  console.log('end add allowance definition')
}
