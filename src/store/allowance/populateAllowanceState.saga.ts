import { PayloadAction } from '@reduxjs/toolkit';
import { select, call, put } from 'typed-redux-saga'
import crypto from 'crypto'
import { AllowanceDefinition, AllowanceExecution, AllowanceState } from './allowance.types'
import { allowanceStateActions } from './allowanceState.slice'

export const getDays = (date: Date): number => Math.floor(date as unknown as number/8.64e7);

// eslint-disable-next-line require-yield
export function* populateAllowanceStateSaga(
  allowanceDefinition: AllowanceDefinition,
  allowanceExecution: AllowanceExecution
): Generator {
  console.log('populateAllowanceStateSaga')
  const { amount, ownerId, spenderId } = allowanceDefinition;
  const { durationDays, cycle, infiniteCycle } = allowanceExecution;
  const currentDate = new Date();
  const currentFullDays = getDays(currentDate);
  const expirationFullDays = currentFullDays + durationDays
  console.log(currentFullDays, expirationFullDays)

  if(!(cycle && cycle > 0)) {
    const id = crypto.randomBytes(16).toString('hex')
    const allowanceState: AllowanceState = {
      id,
      ownerId,
      spenderId,
      amountLeft: amount,
      expireDate: expirationFullDays,
      startDate: currentFullDays,
    }

    yield* put(allowanceStateActions.addState(allowanceState))
  }
}
