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

function addDays(date: Date, days: number) {
  let result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

const currentDate = new Date(Date.now());

const initialState = {
  users: [
    {
      id: "510298100",
      name: "Roger Skrzypczyk",
      balance: 100.5,
      allowances: [],
    },
    {
      id: "810291029",
      name: "Marcin Misiorek",
      balance: 1000,
      allowances: [],
    },
    {
      id: "500100100",
      name: "Jan Kowalski",
      balance: 600,
      allowances: [],
    },
    {
      id: "710291990",
      name: "Ewa Nowak",
      balance: 123,
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
