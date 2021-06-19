import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  selectAllowanceActiveUser,
  selectOwnerByAllowanceState,
  selectSharingActiveUser,
  sharingDefinitionByUserId,
  selectAllowanceDefinitionByUserId,
  selectCurrentUserShareUsers,selectCurrentUserAllowanceUsers2
} from "../../store/allowance/allowanceSelector";
import { allowanceStateActions } from "../../store/allowance/allowanceState.slice";
import { selectActiveUser } from "../../store/user/userState.selector";


import Typography from "@material-ui/core/Typography";

import { Box } from "@material-ui/core";
import AllowancesTable, {
  AllowanceTableDataRow,
} from "../tables/allowancesTable/AllowancesTable.component";
import { current } from "@reduxjs/toolkit";
import TransferCode from "../transferCode/transferCode.component";

const AllowancesView = () => {
  const currentUser = useSelector(selectActiveUser);
  const definitionsSharing = useSelector(selectAllowanceDefinitionByUserId)(currentUser.id)
  console.log(`definitionsSharing ${definitionsSharing}`)
const selectSharingUser = useSelector(selectCurrentUserShareUsers)
const selectAllowance= useSelector(selectCurrentUserAllowanceUsers2)

  const sharings = useSelector(selectSharingActiveUser).map((u) => {
    console.log(`sharings are ${u.definitionId}`)
    return {
      userName:selectSharingUser(u.definitionId)[0]?.name,
      expireDate: u.expireDate.toString(),
      amountLeft: u.amountLeft.toString()
    };
  });
  const allowances = useSelector(selectAllowanceActiveUser).map((u) => {

    return {
      userName:selectAllowance(u.definitionId)[0]?.name,
      expireDate: u.expireDate.toString(),
      amountLeft: u.amountLeft.toString()
    }
  });


  return (
    <Box pt={5} px={2}>
      <Typography variant="h2">Środki Dostępne</Typography>
      <Box pt={5}>
        {allowances.length ? <AllowancesTable allowanceTableDataRows={allowances} /> : <Typography variant={"h4"}>Brak środków dostępnych</Typography>}
      </Box>

      <Box pt={5}>
        <Typography variant="h2">Środki Udostępnione</Typography>

        <Box pt={5}>
          {sharings.length ? <AllowancesTable allowanceTableDataRows={sharings} /> : <Typography variant={"h4"}>Brak środków udostępnionych</Typography>}
        </Box>
      </Box>
    </Box>
  );
};

export default AllowancesView;
