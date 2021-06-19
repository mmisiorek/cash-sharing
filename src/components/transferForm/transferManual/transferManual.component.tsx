import React, { useState } from "react";

import { Box, Button, Typography } from "@material-ui/core";

import UserSelector from "../../userSelector/userSelector.component";

import TransferTable from "../../tables/transferTable/TransferTable.component";

import { UserType } from "../../../store/users";
import Input from "../../input/Input.component";
import { useSelector } from "react-redux";

import {
  selectActiveAllowanceStateByOwnerId2,
  selectCurrentUserAllowanceUsers,
} from "../../../store/allowance/allowanceSelector";

interface ITransferManual {
  onGenerateCode: () => void
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

  const allowancesSelector = useSelector(selectActiveAllowanceStateByOwnerId2);
  const allowances = allowancesSelector(user ? user.id : ""); //);

  console.log(allowances);

  const [value, setValue] = useState("");

  const error =
    user &&
    allowances &&
    allowances.length > 0 &&
    allowances[0].amount < Number(value);

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
            Maksymalna kwota: {allowances[0].amount.toFixed(2)} zł
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
          disabled={!user || value === ""}
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
          <Button onClick={onGenerateCode}>
            Generate transfer code
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default TransferManual;
