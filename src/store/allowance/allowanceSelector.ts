import { createSelector } from "@reduxjs/toolkit";
import { StoreKeys } from "../root";
import { selectReducer } from "../utils";
import { allowanceStateAdapter } from "./allowanceState.slice";
import { allowanceDefinitionAdapter } from "./allowanceDefinition.slice";
import { getDays } from "./populateAllowanceState.saga";
import { AllowanceState } from "./allowance.types";
import { selectActiveUser } from "../user/userState.selector";
import { usersSelector } from "../selectors";
import { UserType } from "../users";

export const allowanceStateList = createSelector(
  selectReducer(StoreKeys.AllowanceState),
  (state) => allowanceStateAdapter.getSelectors().selectAll(state)
);

export const selectAllowanceByIdSelector = createSelector(
  selectReducer(StoreKeys.AllowanceState),
  (state) => (id: string) =>
    allowanceStateAdapter.getSelectors().selectById(state, id)
);

export const selectAllowanceStateByDefinitionId = createSelector(
  allowanceStateList,
  (allowanceStateList) => (definitionId: string) => {
    return allowanceStateList.filter((allowanceState) => {
      return allowanceState.definitionId === definitionId;
    });
  }
);

export const allowanceDefinitionList = createSelector(
  selectReducer(StoreKeys.AllowanceDefinition),
  (state) => allowanceDefinitionAdapter.getSelectors().selectAll(state)
);

export const selectAllowanceDefinitionByUserId = createSelector(
  allowanceDefinitionList,
  (allowanceDefinitionList) => (userId: string) => {
    return allowanceDefinitionList.filter((allowanceDefinition) => {
      return allowanceDefinition.spenderId === userId;
    });
  }
);

export const selectAllowanceActiveUser = createSelector(
  [
    selectActiveUser,
    selectAllowanceDefinitionByUserId,
    selectAllowanceStateByDefinitionId,
  ],
  (
    activeUser,
    selectAllowanceDefinitionByUserId,
    selectAllowanceStateByDefinitionId
  ) => {
    const allowanceDefinitionList = selectAllowanceDefinitionByUserId(
      activeUser.id
    );
    return allowanceDefinitionList.reduce(
      (activeAllowanceStateList, allowanceDefinition) => {
        const { id } = allowanceDefinition;
        const allowanceStateList = selectAllowanceStateByDefinitionId(id);

        const currentDay = getDays(new Date());
        const activeAllowanceState = allowanceStateList.filter(
          ({ startDate, expireDate }) =>
            currentDay >= startDate && currentDay <= expireDate
        );
        return [...activeAllowanceStateList, ...activeAllowanceState];
      },
      [] as AllowanceState[]
    );
  }
);

export const selectUsersAllowance = createSelector(
  [selectAllowanceActiveUser, usersSelector],
  (allowanceActiveUser) => (ownerId: string) =>
    allowanceActiveUser.filter(({ id }) => id === ownerId)
);

export const selectOwnerByAllowanceState = createSelector(
  [allowanceDefinitionList, selectAllowanceActiveUser],
  (allowanceDefinitionList, allowances) => {
    return allowanceDefinitionList.filter((allowanceDefinition) =>
      allowances
        .map(({ definitionId }) => definitionId)
        .includes(allowanceDefinition.id)
    );
  }
);

export const selectCurrentUserAllowanceUsers = createSelector(
  [selectOwnerByAllowanceState, usersSelector],
  (allowances, users) => {
    const usersWithAllowance = allowances
      .map((x) => users.find((y) => y.id === x.ownerId))
      .filter((x) => x !== undefined);

    return usersWithAllowance as UserType[];
  }
);

export const selectActiveAllowanceStateByOwnerId = createSelector(
  [selectAllowanceActiveUser],
  (allowanceActiveUser) => (ownerId: string) =>
    allowanceActiveUser.filter(({ id }) => id === ownerId)
);

export const sharingDefinitionByUserId = createSelector(
  allowanceDefinitionList,
  (allowanceDefinitionList) => (userId: string) => {
    return allowanceDefinitionList.filter((allowanceDefinition) => {
      return allowanceDefinition.ownerId === userId;
    });
  }
);

export const selectSharingActiveUser = createSelector(
  [
    selectActiveUser,
    sharingDefinitionByUserId,
    selectAllowanceStateByDefinitionId,
  ],
  (
    activeUser,
    sharingDefinitionByUserId,
    selectAllowanceStateByDefinitionId
  ) => {
    const allowanceDefinitionList = sharingDefinitionByUserId(activeUser.id);
    return allowanceDefinitionList.reduce(
      (activeSharingStateList, allowanceDefinition) => {
        const { id } = allowanceDefinition;
        const allowanceStateList = selectAllowanceStateByDefinitionId(id);

        const currentDay = getDays(new Date());
        const activeSharingState = allowanceStateList.filter(
          ({ startDate, expireDate }) =>
            currentDay >= startDate && currentDay <= expireDate
        );
        return [...activeSharingStateList, ...activeSharingState];
      },
      [] as AllowanceState[]
    );
  }
);

export const selectActiveSharingBySpenderId = createSelector(
  [selectSharingActiveUser],
  (sharingActiveUser) => (spenderId: string) =>
    sharingActiveUser.filter(({ id }) => id === spenderId)
);
