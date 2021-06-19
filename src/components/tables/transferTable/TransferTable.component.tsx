import React from "react";

import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableRow from "@material-ui/core/TableRow";
import TableHead from "@material-ui/core/TableHead";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import Paper from "@material-ui/core/Paper";

export type TransferRow = {
  userName: string;
  totalAmount: string;
  amountUsed: string;
};

type TransferTableProps = {
  rows: TransferRow[];
};

const TransferTable = ({ rows }: TransferTableProps) => (
  <TableContainer component={Paper}>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Użytkownik</TableCell>
          <TableCell>Kwota udostępniona</TableCell>
          <TableCell>Kwota zatwierdzona</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow>
            <TableCell>{row.userName}</TableCell>
            <TableCell>{row.totalAmount}</TableCell>
            <TableCell>{row.amountUsed}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

export default TransferTable;
