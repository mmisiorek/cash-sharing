import React from 'react'

import Typography from "@material-ui/core/Typography";
import { AllowancesTable, AllowanceTableDataRow } from "./AllowancesTable";

export const UserView = () => {
    const allowances: AllowanceTableDataRow[] = [
        {
            userName: "User1",
            amountLeft: "100",
            expireDate: 1624110137
        },
        {
            userName: "User2",
            amountLeft: "100",
            expireDate: 1624110137
        },
        {
            userName: "User3",
            amountLeft: "100",
            expireDate: 1624110137
        },
        {
            userName: "User4",
            amountLeft: "100",
            expireDate: 1624110137
        }
    ]

    const sharings: AllowanceTableDataRow[] = [
        {
            userName: "User1",
            amountLeft: "100",
            expireDate: 1624110137
        },
        {
            userName: "User2",
            amountLeft: "100",
            expireDate: 1624110137
        },
        {
            userName: "User3",
            amountLeft: "100",
            expireDate: 1624110137
        },
        {
            userName: "User4",
            amountLeft: "100",
            expireDate: 1624110137
        }
    ]

    return (
        <div>
            <Typography>Allowances:</Typography>
            <AllowancesTable allowanceTableDataRows={allowances} />
            <Typography>Sharings:</Typography>
            <AllowancesTable allowanceTableDataRows={sharings} />
        </div>
    )
}