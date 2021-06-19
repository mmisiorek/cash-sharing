
import { all, fork } from 'typed-redux-saga'

import { allowanceDefinitionMasterSaga } from '../store/allowance/allowanceDefinition.master.saga'

export const delay = (ms: number) => new Promise(res => setTimeout(res, ms))

export function* mainSaga(): Generator {
    yield all([
      fork(allowanceDefinitionMasterSaga),
    ])
  }
  