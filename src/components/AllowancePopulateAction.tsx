import React from "react";

import Button from "@material-ui/core/Button";
import { allowanceDefinitionActions } from '../store/allowance/allowanceDefinition.slice'

import { useDispatch, useSelector } from "react-redux";
import { StoreDispatch } from "../store/index.types";
import { selectActiveAllowanceStateByUserId, selectActiveSharingStateByUserId } from "../store/allowance/allowanceSelector";
import { allowanceStateActions } from "../store/allowance/allowanceState.slice";

export const AllowancePopulateAction = () => {
  const dispatch = useDispatch<StoreDispatch>()
  const selectAllowanceStateByUserId = useSelector(selectActiveAllowanceStateByUserId)
  const selectSharingStateByUserId = useSelector(selectActiveSharingStateByUserId)
  
  const allowanceStateList = selectAllowanceStateByUserId('user2')
  const sharingStateList = selectSharingStateByUserId('user1')

  const handleAddAllowanceDefinition = () => {
    dispatch(
        allowanceDefinitionActions.addDefinition({
            ownerId: 'user1',
            spenderId: 'user2',
            amount: 123,
        }),
    )
    dispatch(
        allowanceDefinitionActions.addDefinition({
            ownerId: 'user1',
            spenderId: 'user2',
            amount: 123,
        }),
    )
  }

  const handleSpendAllowance = (allowanceStateId: string) => {
    dispatch(
      allowanceStateActions.spendAllowance({
          id: allowanceStateId,
          amount: 50,
      }),
  )
  }
  return (
    <>
      <Button onClick={handleAddAllowanceDefinition}>
        Populate ALlowance
      </Button>
      <ul>{
        allowanceStateList.map(allowanceState => (<li>
          <Button onClick={() => handleSpendAllowance(allowanceState.id)}>
            Spend Allowance
            &nbsp;
            {allowanceState.amountLeft}
          </Button>
          </li>))
      }</ul>
      <ul>{
        sharingStateList.map(sharingState => (<li>{sharingState.amountLeft}</li>))
      }</ul>
    </>
  );
};
