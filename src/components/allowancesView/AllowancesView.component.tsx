import React from 'react'

import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box"
import AllowancesTable, { AllowanceTableDataRow } from "../allowancesTable/AllowancesTable.component";
import { makeStyles } from "@material-ui/core";

const useClasses = makeStyles(({ spacing }) => ({
    box: {
        marginLeft: '25%',
        marginRight: '25%',
        width: '50%'
    },
    section: {
        marginTop: spacing(5)
    },
    paragraph: {
        marginTop: spacing(0.5),
        marginBottom: spacing(0.5)
    }
}))

const AllowancesView = () => {
    const classes = useClasses()

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
        <Box className={classes.box}>
            <div className={classes.section}>
                <Typography className={classes.paragraph}  variant={"h3"}>Allowances:</Typography>
                <AllowancesTable allowanceTableDataRows={allowances} />
            </div>
            <div className={classes.section}>
                <Typography className={classes.paragraph} variant={"h3"}>Sharings:</Typography>
                <AllowancesTable allowanceTableDataRows={sharings} />
            </div>
        </Box>
    )
}

export default AllowancesView