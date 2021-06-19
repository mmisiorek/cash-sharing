import React, { useState, useReducer } from 'react'

import Box from '@material-ui/core/Box'
import TextField from "@material-ui/core/TextField"
import {makeStyles, Typography} from "@material-ui/core";
import Button from "@material-ui/core/Button"
import Select from "@material-ui/core/Select"

import UserSelector from "../userSelector/userSelector.component";
import {useTheme} from "@material-ui/core/styles";

const useClasses = makeStyles(() => ({
    textField: {
        width: '100%'
    },
    buttonBox: {
        display: "flex",
        justifyContent: "flex-end"
    }
}))

interface IOption {
    id: number,
    name: string
}

const options: IOption[] = [
    {
        id: 24,
        name: "Codziennie",
    },
    {
        id: 24,
        name: "Co tydzień",
    }
]

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
            <Box p={2} bgcolor={palette.secondary.main} width="100%">
                <Typography variant="h5">Data wygaśnięcia</Typography>
                <TextField
                    className={classes.textField}
                    variant="outlined" />
            </Box>
            <Box p={2} bgcolor={palette.secondary.main} width="100%">
                <Typography variant="h5">Jak często się powinien odnawiać?</Typography>
                <Select>
                    {}
                </Select>
            </Box>
            <Box className={classes.buttonBox} p={2} bgcolor={palette.secondary.main} width="100%">
                <Button variant={"outlined"}>
                    Dodaj
                </Button>
            </Box>
        </Box>
    )
}

export default CreateAllowanceForm