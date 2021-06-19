import React, { useState, useReducer } from 'react'

import Box from '@material-ui/core/Box'
import TextField from "@material-ui/core/TextField"
import {makeStyles, Typography} from "@material-ui/core";
import Button from "@material-ui/core/Button"

import { useDispatch } from "react-redux";
import { StoreDispatch } from "../../store/index.types";


import UserSelector from "../userSelector/userSelector.component";
import { useTheme } from "@material-ui/core/styles";
import {UserType} from "../../store/users";

import { allowanceDefinitionActions } from '../../store/allowance/allowanceDefinition.slice'
import { current } from '@reduxjs/toolkit';

interface CreateAllowanceFormFields {
    user: UserType | null,
    amount: number,
    days?: number,
    howManyRepeat?: number
}

type CreateAllowanceFormActionUser = {
    type: "user"
    payload: UserType
}

type CreateAllowanceFormActionNumber = {
    type: "amount" | "days" | "howManyRepeat"
    payload: number
}

type CreateAllowanceFormAction = CreateAllowanceFormActionUser | CreateAllowanceFormActionNumber

const initState: CreateAllowanceFormFields = {
    user: null,
    amount: 0
}

function reducer(state: CreateAllowanceFormFields, action: CreateAllowanceFormAction): CreateAllowanceFormFields {
    return {
        ...state,
        [action.type]: action.payload
    }
}

const useClasses = makeStyles(() => ({
    textField: {
        width: '100%'
    },
    buttonBox: {
        display: "flex",
        justifyContent: "flex-end"
    }
}))

const CreateAllowanceForm = () => {
    const { palette } = useTheme();
    const classes = useClasses()
    const [state, dispatch] = useReducer(reducer, initState)
    const reduxDispatch = useDispatch<StoreDispatch>()

    const handleUserChange = (user: UserType) => {
        dispatch({
            type: "user",
            payload: user
        })
    }

    const handleAmountChange = (ev: React.ChangeEvent<{ name?: string; value: unknown }>) => {
        if (ev && ev.target && typeof(ev.target.value) === "string") {
            dispatch({
                type: "amount",
                payload: parseInt(ev.target.value)
            })
        }
    }

    const handleDaysChange = (ev: React.ChangeEvent<{ name?: string; value: unknown }>) => {
        if (ev && ev.target && typeof(ev.target.value) === "string") {
            dispatch({
                type: "days",
                payload: parseInt(ev.target.value)
            })
        }
    }

    const handleHowManyChange = (ev: React.ChangeEvent<{ name?: string; value: unknown }>) => {
        if (ev && ev.target && typeof(ev.target.value) === "string") {
            dispatch({
                type: "howManyRepeat",
                payload: parseInt(ev.target.value)
            })
        }
    }

    const handleClick = () => {
        console.log(state)
        if (!state.user || !state.howManyRepeat || !state.days) return
        reduxDispatch(
            allowanceDefinitionActions.addDefinition({
                ownerId:'12',
                spenderId: state.user.id,
                amount: state.amount,
                cycle: state.howManyRepeat,
                durationDays: state.days
            }),
        )
    }

    return (
        <Box pt={5}>
            <Box p={2} bgcolor={palette.secondary.main} width="100%">
                <UserSelector onChange={handleUserChange} />
            </Box>
            <Box p={2} bgcolor={palette.secondary.main} width="100%">
                <Typography variant="h5">Kwota</Typography>
                <TextField
                    type={"number"}
                    className={classes.textField}
                    onChange={handleAmountChange}
                    variant="outlined" />
            </Box>
            <Box p={2} bgcolor={palette.secondary.main} width="100%">
                <Typography variant="h5">Co ile dni powinien odnawiać?</Typography>
                <TextField
                    type={"number"}
                    className={classes.textField}
                    onChange={handleDaysChange}
                    variant="outlined" />
            </Box>
            <Box p={2} bgcolor={palette.secondary.main} width="100%">
                <Typography variant="h5">Ile razy powinien to odnowić?</Typography>
                <TextField
                    type={"number"}
                    className={classes.textField}
                    onChange={handleHowManyChange}
                    variant="outlined" />
            </Box>
            <Box className={classes.buttonBox} p={2} bgcolor={palette.secondary.main} width="100%">
                <Button variant={"outlined"} onClick={handleClick}>
                    Dodaj
                </Button>
            </Box>
        </Box>
    )
}

export default CreateAllowanceForm