
import { all, fork } from 'typed-redux-saga'

import { allowanceMasterSaga } from '../store/allowance/allowance.master.saga'

export const delay = (ms: number) => new Promise(res => setTimeout(res, ms))

export function* mainSaga(): Generator {
    yield all([
      fork(allowanceMasterSaga),
    ])
  }
  