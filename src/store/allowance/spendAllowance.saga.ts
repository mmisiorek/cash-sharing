import { PayloadAction } from '@reduxjs/toolkit';
import { select, put } from 'typed-redux-saga'

import { AllowanceSpend, AllowanceState} from './allowance.types'
import { selectAllowanceByIdSelector } from './allowanceSelector';
import { allowanceStateActions } from './allowanceState.slice';

export function* spendAllowanceSaga(
  action: PayloadAction<AllowanceSpend>,
): Generator {
  const { id, amount: amountSpend } = action.payload
  const selectAllowanceById = yield* select(selectAllowanceByIdSelector)
  const allowanceState = selectAllowanceById(id) as AllowanceState

  const {
    amountLeft,
  } = allowanceState

  if(amountLeft - amountSpend > 0) {
    const updatedAllowanceState = {
      ...allowanceState,
      amountLeft: amountLeft - amountSpend
    }
    console.log('spendAllowance', amountLeft - amountSpend)
    yield* put(allowanceStateActions.updateState(updatedAllowanceState))
  } else {
    console.log('Not allowed')
  }
}
