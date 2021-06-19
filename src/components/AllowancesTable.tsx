import React from 'react'

import TableContainer from '@material-ui/core/TableContainer'
import Table from "@material-ui/core/Table"
import TableRow from "@material-ui/core/TableRow"
import TableHead from "@material-ui/core/TableHead"
import TableCell from "@material-ui/core/TableCell"
import TableBody from "@material-ui/core/TableBody"
import Paper from "@material-ui/core/Paper"

export type AllowanceTableDataRow = {
    userName: string,
    amountLeft: string,
    expireDate: number
}

type AllowancesTableProps = {
    allowanceTableDataRows: AllowanceTableDataRow[]
}

export const AllowancesTable = ({ allowanceTableDataRows }: AllowancesTableProps) => (
    <TableContainer component={Paper}>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>User</TableCell>
                    <TableCell>Amount</TableCell>
                    <TableCell>Expire Date</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {allowanceTableDataRows.map(allowanceTableDataRow => (
                    <TableRow>
                        <TableCell>{allowanceTableDataRow.userName}</TableCell>
                        <TableCell>{allowanceTableDataRow.amountLeft}</TableCell>
                        <TableCell>{allowanceTableDataRow.expireDate}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>
)