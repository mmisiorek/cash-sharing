import { createSelector } from '@reduxjs/toolkit'
import { StoreKeys } from '../root'
import { selectReducer } from '../utils'
import { allowanceStateAdapter } from './allowanceState.slice'
import { allowanceDefinitionAdapter } from './allowanceDefinition.slice'
import { getDays } from './populateAllowanceState.saga'
import { AllowanceState } from './allowance.types'

export const allowanceStateList = createSelector(
  selectReducer(StoreKeys.AllowanceState),
  (state) => allowanceStateAdapter.getSelectors().selectAll(state),
)

export const selectAllowanceByIdSelector = createSelector(
  selectReducer(StoreKeys.AllowanceState),
  (state) => (id: string) => allowanceStateAdapter.getSelectors().selectById(state, id)
)

export const selectAllowanceStateByDefinitionId = createSelector(allowanceStateList,
    (allowanceStateList) => (definitionId: string) => {
    return allowanceStateList.filter(allowanceState => {
      return allowanceState.definitionId === definitionId
    })
})

export const allowanceDefinitionList = createSelector(
  selectReducer(StoreKeys.AllowanceDefinition),
  (state) => allowanceDefinitionAdapter.getSelectors().selectAll(state)
)

export const selectAllowanceDefinitionByUserId = createSelector(
  allowanceDefinitionList,
  (allowanceDefinitionList) => (userId: string) => {
    return allowanceDefinitionList.filter(allowanceDefinition => {
      return allowanceDefinition.spenderId === userId
    })
  }
)

export const selectActiveAllowanceStateByUserId = createSelector(
  [selectAllowanceDefinitionByUserId, selectAllowanceStateByDefinitionId],
  (selectAllowanceDefinitionByUserId, selectAllowanceStateByDefinitionId) => (userId: string) => {
    const allowanceDefinitionList =  selectAllowanceDefinitionByUserId(userId)
    return allowanceDefinitionList.reduce((activeAllowanceStateList, allowanceDefinition) => {
      const { id } = allowanceDefinition
      const allowanceStateList = selectAllowanceStateByDefinitionId(id)
      
      const currentDay = getDays(new Date())
      const activeAllowanceState = allowanceStateList.filter(
        ({startDate, expireDate}) => 
        currentDay >= startDate && currentDay <= expireDate
      )
      return [
        ...activeAllowanceStateList,
        ...activeAllowanceState,
      ]
    }, [] as AllowanceState[])
  }
)

export const sharingDefinitionByUserId = createSelector(
  allowanceDefinitionList,
  (allowanceDefinitionList) => (userId: string) => {
    return allowanceDefinitionList.filter(allowanceDefinition => {
      return allowanceDefinition.ownerId === userId
    })
  }
)


export const selectActiveSharingStateByUserId = createSelector(
  [sharingDefinitionByUserId, selectAllowanceStateByDefinitionId],
  (sharingDefinitionByUserId, selectAllowanceStateByDefinitionId) => (userId: string) => {
    const allowanceDefinitionList =  sharingDefinitionByUserId(userId)
    return allowanceDefinitionList.reduce((activeSharingStateList, allowanceDefinition) => {
      const { id } = allowanceDefinition
      const allowanceStateList = selectAllowanceStateByDefinitionId(id)
      
      const currentDay = getDays(new Date())
      const activeSharingState = allowanceStateList.filter(
        ({startDate, expireDate}) => 
        currentDay >= startDate && currentDay <= expireDate
      )
      return [
        ...activeSharingStateList,
        ...activeSharingState,
      ]
    }, [] as AllowanceState[])
  }
)