import React from "react";

import Button from "@material-ui/core/Button";
import { allowanceDefinitionActions } from '../store/allowance/allowanceDefinition.slice'

import { useDispatch, useSelector } from "react-redux";
import { StoreDispatch } from "../store/index.types";
import { selectAllowanceActiveUser, selectSharingActiveUser } from "../store/allowance/allowanceSelector";
import { allowanceStateActions } from "../store/allowance/allowanceState.slice";

import { usersSelector } from "../store/selectors";

export const AllowancePopulateAction = () => {
  const dispatch = useDispatch<StoreDispatch>()
  const allowances = useSelector(selectAllowanceActiveUser)
  const sharing = useSelector(selectSharingActiveUser)
  
  const users = useSelector(usersSelector)

  const userSpender = users[0].id
  const userOwner = users[1].id
  
  const handleAddAllowanceDefinition = () => {
    dispatch(
        allowanceDefinitionActions.addDefinition({
            ownerId:userOwner,
            spenderId: userSpender,
            amount: 50,
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
        allowances.map(allowanceState => (<li>
          <Button onClick={() => handleSpendAllowance(allowanceState.id)}>
            Spend Allowance
            &nbsp;
            {allowanceState.amountLeft}
          </Button>
          </li>))
      }</ul>
      <ul>{sharing.map(sharingState => (<li>{sharingState.amountLeft}</li>))}</ul>
    </>
  );
};
