import { PayloadAction } from "@reduxjs/toolkit";
import { ActionType } from "./index.types";

export interface Allowance {
  receiverId: string;
  amount: number;
  startDate: Date;
  expireDate: Date;
  infiniteCycle?: boolean;
  cycle?: number;
}

export interface UserType {
  id: string;
  name: string;
  balance: number;
  allowances: Allowance[];
}

export type UsersStateType = {
  users: UserType[];
};

export type UserStateType = {
  user: UserType|null;
}

function addDays(date: Date, days: number) {
  var result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

const currentDate = new Date(Date.now());

const initialState = {
  users: [
    {
      id: "48789",
      name: "Roger Skrzypczyk",
      balance: 100.5,
      allowances: [
        {
          receiverId: "487123123",
          amount: 50,
          startDate: currentDate,
          expireDate: addDays(currentDate, 7),
        },
      ],
    },
    {
      id: "487123123",
      name: "Marcin Misiorek",
      balance: 1000,
      allowances: [],
    },
  ],
};

export function usersReducer(
  state: UsersStateType = initialState,
  action: ActionType
): UsersStateType {
  switch (action.type) {
    case "something":
      return state;
    default:
      return state;
  }
}


export function userReducer(
  state: UserStateType = { user: null },
  action: ActionType
): UserStateType {
  switch (action.type) {
    case "something":
      return state;
    default:
      return state;
  }
}

export function* currentUserSaga(
  action: PayloadAction<UserType>,
): Generator {
  const currentUserData = action.payload
  
}
