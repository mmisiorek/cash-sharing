import React, { useState } from 'react'

import Box from '@material-ui/core/Box'
import TextField from "@material-ui/core/TextField"
import {makeStyles, Typography} from "@material-ui/core";

import UserSelector from "../userSelector/userSelector.component";
import {useTheme} from "@material-ui/core/styles";

const useClasses = makeStyles(() => ({
    textField: {
        width: '100%'
    }
}))

const CreateAllowanceForm = () => {
    const { palette } = useTheme();
    const classes = useClasses()

    return (
        <Box pt={5}>
            <Box p={2} bgcolor={palette.secondary.main} width="100%">
                <UserSelector />
            </Box>
            <Box p={2} bgcolor={palette.secondary.main} width="100%">
                <Typography variant="h5">Kwota</Typography>
                <TextField
                    className={classes.textField}
                    variant="outlined" />
            </Box>
        </Box>
    )
}

export default CreateAllowanceForm