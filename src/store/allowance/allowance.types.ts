export interface AllowanceDefinitionData {
  ownerId: string;
  spenderId: string;
  amount: number;
}

export interface AllowanceDefinition {
  id: string;
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
  definitionId: string;
  amountLeft: number;
  startDate: number;
  expireDate: number;
}


export interface AllowanceSpend {
  id: AllowanceState['id'];
  amount: number;
}