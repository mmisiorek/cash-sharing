import React, { useState } from 'react'

import Box from '@material-ui/core/Box'
import Grid from "@material-ui/core/Grid"
import TextField from "@material-ui/core/TextField"

import { usersSelector } from "../../store/selectors";
import { useSelector } from "react-redux";

const CreateAllowanceForm = () => {
    const users = useSelector(usersSelector)

    return (
        <Box pt={5}>
            <div>HEre user select</div>
            <TextField
                label="amount"
                placeholder={"Amount"} />

        </Box>
    )
}

export default CreateAllowanceForm