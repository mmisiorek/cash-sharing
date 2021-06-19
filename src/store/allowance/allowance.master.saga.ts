import { all, takeEvery } from 'typed-redux-saga'

import {allowanceDefinitionActions} from './allowanceDefinition.slice'
import { addAllowanceDefinitionSaga } from './addAllowanceDefinition.saga'
import {allowanceStateActions} from './allowanceState.slice'
import { spendAllowanceSaga } from './spendAllowance.saga'

export function* allowanceMasterSaga(): Generator {
  yield all([
    takeEvery(allowanceDefinitionActions.addDefinition.type, addAllowanceDefinitionSaga),
    takeEvery(allowanceStateActions.spendAllowance.type, spendAllowanceSaga),
  ])
}
