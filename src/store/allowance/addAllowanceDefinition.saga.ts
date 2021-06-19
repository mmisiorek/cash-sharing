import { PayloadAction } from "@reduxjs/toolkit";
import { call, put } from "typed-redux-saga";
import crypto from "crypto";

import {
  AllowanceDefinition,
  AllowanceDefinitionData,
  AllowanceExecution,
} from "./allowance.types";
import { populateAllowanceStateSaga } from "./populateAllowanceState.saga";
import { allowanceDefinitionActions } from "./allowanceDefinition.slice";

export function* addAllowanceDefinitionSaga(
  action: PayloadAction<AllowanceDefinitionData>
): Generator {
  const allowanceDefinitionData = action.payload;
  const allowanceExecution: AllowanceExecution = {
    durationDays: action.payload.durationDays,
    cycle: action.payload.cycle,
  }

  const id = crypto.randomBytes(16).toString("hex");

  const allowanceDefinition: AllowanceDefinition = {
    id,
    ...allowanceDefinitionData,
  };

  yield* put(
    allowanceDefinitionActions.addDefinitionToStore(allowanceDefinition)
  );
  yield* call(
    populateAllowanceStateSaga,
    allowanceDefinition,
    allowanceExecution
  );
}
