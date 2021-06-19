import React, { useState } from "react";

import { Box, Button, Typography } from "@material-ui/core";

import UserSelector from "../../userSelector/userSelector.component";

import TransferTable from "../../tables/transferTable/TransferTable.component";

import { UserType } from "../../../store/users";
import Input from "../../input/Input.component";
import { useDispatch, useSelector } from "react-redux";

import {
  selectActiveAllowanceStateByOwnerId2,
  selectAllowanceStateByDefinitionId,
  selectCurrentUserAllowanceUsers,
} from "../../../store/allowance/allowanceSelector";
import { allowanceStateActions } from "../../../store/allowance/allowanceState.slice";
import { StoreDispatch } from "../../../store/index.types";

interface ITransferManual {
  onGenerateCode: () => void;
}

const TransferManual: React.FC<ITransferManual> = ({ onGenerateCode }) => {
  const allowanceUsers = useSelector(selectCurrentUserAllowanceUsers);

  const [rows, setRows] = useState<
    {
      userName: string;
      totalAmount: string;
      amountUsed: string;
    }[]
  >([]);
  const [user, setUser] = useState<UserType>();
  const dispatch = useDispatch<StoreDispatch>();
  const allowanceStateSelector = useSelector(
    selectAllowanceStateByDefinitionId
  );
  const allowancesSelector = useSelector(selectActiveAllowanceStateByOwnerId2);
  const allowances = allowancesSelector(user ? user.id : "");
  const allowanceState = allowanceStateSelector(
    allowances && allowances.length > 0 ? allowances[0].id : ""
  );

  const [value, setValue] = useState("");

  const error =
    user &&
    allowanceState &&
    allowanceState.length > 0 &&
    (allowanceState[0].amountLeft < Number(value) ||
      allowanceState[0].amountLeft === 0);

  const onUserChange = (user: UserType) => {
    if (user) {
      setUser(user);
    }
  };

  const onClick = () => {
    if (user && value !== "") {
      setRows([
        ...rows,
        {
          userName: user.name,
          totalAmount: allowances[0].amount.toString(),
          amountUsed: value,
        },
      ]);

      dispatch(
        allowanceStateActions.spendAllowance({
          id: allowanceState[0].id,
          amount: Number(value),
        })
      );
    }
  };

  return (
    <Box pt={2}>
      <Box width="100%" pt={2} pb={2}>
        <UserSelector users={allowanceUsers} onChange={onUserChange} />
      </Box>

      {allowances && allowances.length > 0 && (
        <Box>
          <Typography>
            Maksymalna kwota: {allowanceState[0].amountLeft.toFixed(2)} zł
          </Typography>
        </Box>
      )}

      <Box pt={2}>
        <Input value={value} onChange={(val) => setValue(val)} label="Kwota" />
        {error && (
          <Typography color="error">
            Kwota którą podałeś przekracza maksymalną
          </Typography>
        )}
      </Box>

      <Box pt={2} width="100%">
        <Button
          disabled={!user || value === "" || error}
          style={{ width: "100%" }}
          color="primary"
          variant="contained"
          onClick={onClick}
        >
          Dodaj odbiorce
        </Button>
      </Box>

      {rows && rows.length > 0 && (
        <Box pt={2}>
          <TransferTable rows={rows} />
          <Box pt={2}>
            <Button
              style={{ width: "100%" }}
              color="primary"
              variant="contained"
              onClick={onGenerateCode}
            >
              Generuj kod transferu
            </Button>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default TransferManual;
