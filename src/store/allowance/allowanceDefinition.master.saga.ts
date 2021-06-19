import { all, takeEvery } from 'typed-redux-saga'

import {allowanceDefinitionActions} from './allowanceDefinition.slice'
import { addAllowanceDefinitionSaga } from './addAllowanceDefinition.saga'

export function* allowanceDefinitionMasterSaga(): Generator {
  yield all([
    takeEvery(allowanceDefinitionActions.addDefinition.type, addAllowanceDefinitionSaga),
  ])
}
