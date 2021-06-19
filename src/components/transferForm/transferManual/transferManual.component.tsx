import React, { useState } from "react";

import { Box, Button } from "@material-ui/core";

import UserSelector from "../../userSelector/userSelector.component";

import TransferTable from "../../tables/transferTable/TransferTable.component";

import { UserType } from "../../../store/users";
import Input from "../../input/Input.component";
import { useSelector } from "react-redux";
// import { selectActiveUser } from "../../../store/user/userState.selector";
import {
  selectCurrentUserAllowanceUsers,
  selectActiveAllowanceStateByOwnerId,
} from "../../../store/allowance/allowanceSelector";

const TransferManual: React.FC<any> = () => {
  const allowanceUsers = useSelector(selectCurrentUserAllowanceUsers);

  const [rows, setRows] = useState<
    {
      userName: string;
      totalAmount: string;
      amountUsed: string;
    }[]
  >([]);
  const [user, setUser] = useState<UserType>();

  const allowancesSelector = useSelector(selectActiveAllowanceStateByOwnerId);
  const allowances = allowancesSelector(user ? user.id : "");
  console.log(allowances);

  const [value, setValue] = useState("");

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
          totalAmount: "Duzo",
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

      <Box pt={2}>
        <Input value={value} onChange={(val) => setValue(val)} label="Kwota" />
      </Box>

      <Box pt={2} width="100%" display="flex" justifyContent="center">
        <Button color="primary" variant="contained" onClick={onClick}>
          Dodaj odbiorce
        </Button>
      </Box>

      <Box pt={2}>
        <TransferTable rows={rows} />
      </Box>
    </Box>
  );
};

export default TransferManual;
