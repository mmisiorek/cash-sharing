import { PayloadAction } from "@reduxjs/toolkit";
import { select, put, call } from "typed-redux-saga";
import { userActions } from "../users";

import { AllowanceSpend, AllowanceState } from "./allowance.types";
import { selectAllowanceByIdSelector } from "./allowanceSelector";
import { allowanceStateActions } from "./allowanceState.slice";
import { selectActiveUser } from "../user/userState.selector";

export function* spendAllowanceSaga(
  action: PayloadAction<AllowanceSpend>
): Generator {
  const { id, amount: amountSpend } = action.payload;
  const selectAllowanceById = yield* select(selectAllowanceByIdSelector);

  const allowanceState = (yield* call(
    selectAllowanceById,
    id
  )) as AllowanceState;
  const user = yield* select(selectActiveUser);

  const { amountLeft } = allowanceState;

  console.log(user, amountLeft);
  if (amountLeft - amountSpend >= 0 && user !== null) {
    const updatedAllowanceState = {
      ...allowanceState,
      amountLeft: amountLeft - amountSpend,
    };

    const updatedUser = {
      ...user,
      balance: user.balance - amountSpend,
    };
    yield* put(allowanceStateActions.updateState(updatedAllowanceState));
    yield* put(userActions.updateBalance(updatedUser));
  } else {
    console.log("Not allowed");
  }
}
