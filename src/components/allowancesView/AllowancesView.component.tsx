import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  selectAllowanceActiveUser,
  selectOwnerByAllowanceState,
  selectSharingActiveUser,
  sharingDefinitionByUserId,
} from "../../store/allowance/allowanceSelector";
import { allowanceStateActions } from "../../store/allowance/allowanceState.slice";
import { selectActiveUser } from "../../store/user/userState.selector";

import { usersSelector } from "../../store/selectors";
import Typography from "@material-ui/core/Typography";

import { Box } from "@material-ui/core";
import AllowancesTable, {
  AllowanceTableDataRow,
} from "../tables/allowancesTable/AllowancesTable.component";
<<<<<<< HEAD
import { current } from "@reduxjs/toolkit";
=======
import { Box } from "@material-ui/core";
import TransferCode from "../transferCode/transferCode.component";
>>>>>>> c2d283fa00b50725fa623ef0b6a461c9402369ab

const AllowancesView = () => {
  // const currentUser = useSelector(selectActiveUser);
  // console.log(`currentUser ${currentUser}`);
  // const definitions = useSelector(sharingDefinitionByUserId)(currentUser.id);
  // const definitionsSharing = useSelector(selectAllowanceDefinitionByUserId)
  // console.log(`definitions are ${definitions}`);

  // console.log(definitions[0]?.ownerId);
  // console.log(definitions[0]?.spenderId);

  // const allowances = useSelector(selectAllowanceActiveUser).map((dupa) => {
  //   return {
  //     userName: "User1",
  //     expireDate: "duap",
  //     amountLeft: "123",
  //   };
  // });
  // const sharing = useSelector(selectSharingActiveUser);

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

<<<<<<< HEAD
  // return (
  //   <Box pt={5}>
  //     <Typography variant="h2">Środki Dostępne</Typography>
  //     <Box pt={5}>
  //       <AllowancesTable allowanceTableDataRows={allowances} />
  //     </Box>
=======
  return (
    <Box pt={5}  px={2}>
      <Typography variant="h2">Środki Dostępne</Typography>
      <Box pt={5}>
        <AllowancesTable allowanceTableDataRows={allowances} />
      </Box>
>>>>>>> c2d283fa00b50725fa623ef0b6a461c9402369ab

  //     <Box pt={5}>
  //       <Typography variant="h2">Środki Udostępnione</Typography>

  //       <Box pt={5}>
  //         {/* <AllowancesTable allowanceTableDataRows={sharings} /> */}
  //       </Box>
  //     </Box>
  //   </Box>
  // );
};

export default AllowancesView;
