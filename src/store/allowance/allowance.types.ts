export interface AllowanceDefinition {
  ownerId: string;
  spenderId: string;
  amount: number;
}

export interface AllowanceExecution {
  cycle?: number;
  infiniteCycle?: boolean;
  durationDays: number;
}

export interface AllowanceState {
  id: string;
  ownerId: string;
  spenderId: string;
  amountLeft: number;
  startDate: number;
  expireDate: number;
}
