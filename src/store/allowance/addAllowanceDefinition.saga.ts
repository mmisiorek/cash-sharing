import { PayloadAction } from '@reduxjs/toolkit';
import { select, call, put } from 'typed-redux-saga'
import crypto from 'crypto'

import { AllowanceDefinition, AllowanceDefinitionData, AllowanceExecution} from './allowance.types'
import { populateAllowanceStateSaga } from './populateAllowanceState.saga'
import { allowanceDefinitionActions } from './allowanceDefinition.slice'

export function* addAllowanceDefinitionSaga(
  action: PayloadAction<AllowanceDefinitionData>,
): Generator {
  const allowanceDefinitionData = action.payload
  const allowanceExecution: AllowanceExecution = {
    durationDays: 2,
    cycle: 2,
  }
  console.log('add allowance definition')

  const id = crypto.randomBytes(16).toString('hex')

  const allowanceDefinition: AllowanceDefinition = {
    id,
    ...allowanceDefinitionData,
  }

  yield* put(allowanceDefinitionActions.addDefinitionToStore(allowanceDefinition))

  yield* call(populateAllowanceStateSaga, allowanceDefinition, allowanceExecution)
  console.log('end add allowance definition')
}
