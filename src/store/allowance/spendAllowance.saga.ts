import { PayloadAction } from '@reduxjs/toolkit';
import { select, put } from 'typed-redux-saga'
import { userActions } from '../users';

import { AllowanceSpend, AllowanceState} from './allowance.types'
import { selectAllowanceByIdSelector } from './allowanceSelector';
import { allowanceStateActions } from './allowanceState.slice';

export function* spendAllowanceSaga(
  action: PayloadAction<AllowanceSpend>,
): Generator {
  const { id, amount: amountSpend } = action.payload
  const selectAllowanceById = yield* select(selectAllowanceByIdSelector)
  const allowanceState = selectAllowanceById(id) as AllowanceState
  // const user = yield* select(usersSelector)

  const {
    amountLeft,
  } = allowanceState

  if(amountLeft - amountSpend > 0) {
    const updatedAllowanceState = {
      ...allowanceState,
      amountLeft: amountLeft - amountSpend
    }
    // const updatedUser = {
    //   ...user,
    //   balance: user.balance - amountSpend,
    // }
    yield* put(allowanceStateActions.updateState(updatedAllowanceState))
    // yield* put(userActions.updateBalance())
  } else {
    console.log('Not allowed')
  }
}
