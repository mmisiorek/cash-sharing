import React from "react";

import Typography from "@material-ui/core/Typography";
import AllowancesTable, {
  AllowanceTableDataRow,
} from "../allowancesTable/AllowancesTable.component";
import { Box } from "@material-ui/core";

const AllowancesView = () => {
  const allowances: AllowanceTableDataRow[] = [
    {
      userName: "User1",
      amountLeft: "100",
      expireDate: 1624110137,
    },
    {
      userName: "User2",
      amountLeft: "100",
      expireDate: 1624110137,
    },
    {
      userName: "User3",
      amountLeft: "100",
      expireDate: 1624110137,
    },
    {
      userName: "User4",
      amountLeft: "100",
      expireDate: 1624110137,
    },
  ];

  const sharings: AllowanceTableDataRow[] = [
    {
      userName: "User1",
      amountLeft: "100",
      expireDate: 1624110137,
    },
    {
      userName: "User2",
      amountLeft: "100",
      expireDate: 1624110137,
    },
    {
      userName: "User3",
      amountLeft: "100",
      expireDate: 1624110137,
    },
    {
      userName: "User4",
      amountLeft: "100",
      expireDate: 1624110137,
    },
  ];

  return (
    <Box pt={5}>
      <Typography variant="h2">Środki Dostępne</Typography>
      <Box px={10} pt={5}>
        <AllowancesTable allowanceTableDataRows={allowances} />
      </Box>

      <Box pt={5}>
        <Typography variant="h2">Środki Udostępnione</Typography>

        <Box px={10} pt={5}>
          <AllowancesTable allowanceTableDataRows={sharings} />
        </Box>
      </Box>
    </Box>
  );
};

export default AllowancesView;
