
import { store } from '../store'

export type ActionType = {
    type: string
}

export type StoreDispatch = typeof store.dispatch