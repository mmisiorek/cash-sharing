import { rootReducer, StoreKeys } from './root'

export type StoreState = ReturnType<typeof rootReducer>

export const selectReducer = <StoreKey extends StoreKeys>(
  storeKey: StoreKey,
) => {
  return (store: StoreState): StoreState[StoreKey] => {
    return store[storeKey]
  }
}
