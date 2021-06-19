import React from "react";

import Button from "@material-ui/core/Button";
import { allowanceDefinitionActions } from '../store/allowance/allowanceDefinition.slice'

import { useDispatch } from "react-redux";
import { StoreDispatch } from "../store/index.types";

export const AllowancePopulateAction = () => {
  const dispatch = useDispatch<StoreDispatch>()

  const handleAddAllowanceDefinition = () => {
    dispatch(
        allowanceDefinitionActions.addDefinition({
            ownerId: 'user1',
            spenderId: 'user2',
            amount: 123,
        }),
    )
  }
  return (
    <Button onClick={handleAddAllowanceDefinition}>
      Populate ALlowance
    </Button>
  );
};
