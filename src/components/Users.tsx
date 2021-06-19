import React from 'react'

import Select from '@material-ui/core/Select'
import MenuItem from "@material-ui/core/MenuItem"

import { useSelector } from "react-redux";
import { RootState } from '../store/root'

export const Users = () => {
    const userNames = useSelector((state: RootState) => {
        return state.users.users.map(user => user.name)
    })

    return <Select>
        {userNames.map(userName => <MenuItem>{userName}</MenuItem>)}
    </Select>
}