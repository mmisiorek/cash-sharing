import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  selectAllowanceActiveUser,
  selectOwnerByAllowanceState,
  selectSharingActiveUser,
  sharingDefinitionByUserId,
  selectAllowanceDefinitionByUserId
} from "../../store/allowance/allowanceSelector";
import { allowanceStateActions } from "../../store/allowance/allowanceState.slice";
import { selectActiveUser } from "../../store/user/userState.selector";

import { usersSelector } from "../../store/selectors";
import Typography from "@material-ui/core/Typography";

import { Box } from "@material-ui/core";
import AllowancesTable, {
  AllowanceTableDataRow,
} from "../tables/allowancesTable/AllowancesTable.component";
import { current } from "@reduxjs/toolkit";
import TransferCode from "../transferCode/transferCode.component";

const AllowancesView = () => {
  const currentUser = useSelector(selectActiveUser);
  console.log(`currentUser ${currentUser}`);
  const definitions = useSelector(sharingDefinitionByUserId)(currentUser.id);
  const definitionsSharing = useSelector(selectAllowanceDefinitionByUserId)(currentUser.id)
  console.log(`definitions are ${definitions}`);
  console.log(`definitionsSharing ${definitionsSharing}`)

  console.log(definitions[0]?.ownerId);
  console.log(definitions[0]?.spenderId);

  const allowances = useSelector(selectAllowanceActiveUser).map((dupa) => {
    return {
      userName: "User1",
      expireDate: "duap",
      amountLeft: "123",
    };
  });
  const sharings = useSelector(selectSharingActiveUser).map((a) => {
    return {
      userName: 'User2',
      expireDate: 'duap',
      amountLeft: '123'
    }
  });

  // const allowances: AllowanceTableDataRow[] = [
  //   {
  //     userName: "User1",
  //     amountLeft: "100",
  //     expireDate: 1624110137,
  //   },
  //   {
  //     userName: "User2",
  //     amountLeft: "100",
  //     expireDate: 1624110137,
  //   },
  //   {
  //     userName: "User3",
  //     amountLeft: "100",
  //     expireDate: 1624110137,
  //   },
  //   {
  //     userName: "User4",
  //     amountLeft: "100",
  //     expireDate: 1624110137,
  //   },
  // ];

  // const sharings: AllowanceTableDataRow[] = [
  //   {
  //     userName: "User1",
  //     amountLeft: "100",
  //     expireDate: 1624110137,
  //   },
  //   {
  //     userName: "User2",
  //     amountLeft: "100",
  //     expireDate: 1624110137,
  //   },
  //   {
  //     userName: "User3",
  //     amountLeft: "100",
  //     expireDate: 1624110137,
  //   },
  //   {
  //     userName: "User4",
  //     amountLeft: "100",
  //     expireDate: 1624110137,
  //   },
  // ];

  return (
    <Box pt={5}>
      <Typography variant="h2">Środki Dostępne</Typography>
      <Box pt={5}>
        <AllowancesTable allowanceTableDataRows={allowances} />
      </Box>

      <Box pt={5}>
        <Typography variant="h2">Środki Udostępnione</Typography>

        <Box pt={5}>
          <AllowancesTable allowanceTableDataRows={sharings} />
        </Box>
      </Box>
    </Box>
  );
};

export default AllowancesView;
