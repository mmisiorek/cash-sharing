import { PayloadAction } from "@reduxjs/toolkit";
import { select, call, put } from "typed-redux-saga";
import crypto from "crypto";
import {
  AllowanceDefinition,
  AllowanceExecution,
  AllowanceState,
} from "./allowance.types";
import { allowanceStateActions } from "./allowanceState.slice";

export const getDays = (date: Date): number =>
  Math.floor((date as unknown as number) / 8.64e7);

// eslint-disable-next-line require-yield
export function* populateAllowanceStateSaga(
  allowanceDefinition: AllowanceDefinition,
  allowanceExecution: AllowanceExecution
): Generator {
  const { id: definitionId, amount } = allowanceDefinition;
  const { durationDays, cycle } = allowanceExecution;

  const currentDate = new Date();
  const currentFullDays = getDays(currentDate);
  const expirationFullDays = currentFullDays + durationDays;

  if (!(cycle && cycle > 0)) {
    const id = crypto.randomBytes(16).toString("hex");
    const allowanceState: AllowanceState = {
      id,
      definitionId,
      amountLeft: amount,
      expireDate: expirationFullDays,
      startDate: currentFullDays,
    };

    yield* put(allowanceStateActions.addState(allowanceState));
  } else {
    const currentDate = new Date();
    for (
      var i = 0,
        startDay = getDays(currentDate),
        expireDay = getDays(currentDate) + durationDays;
      i < cycle;
      i++,
        startDay = startDay + durationDays,
        expireDay = expireDay + durationDays
    ) {
      const id = crypto.randomBytes(16).toString("hex");
      const allowanceState: AllowanceState = {
        id,
        definitionId,
        amountLeft: amount,
        expireDate: expireDay - 1,
        startDate: startDay,
      };

      yield* put(allowanceStateActions.addState(allowanceState));
    }
  }
}
