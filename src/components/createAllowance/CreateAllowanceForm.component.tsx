import React, { useState } from 'react'

import Box from '@material-ui/core/Box'
import Select from "@material-ui/core/Select"

import { usersSelector } from "../../store/selectors";
import { useSelector } from "react-redux";

export const CreateAllowanceFormComponent = () => {
    const users = useSelector(usersSelector)
    const [selectedUserName, setSelectedUserName] = useState(userNames[0])

    const handleUserChange = (ev: React.ChangeEvent<{name ?: string, value: unknown}>) => {
        if (ev && ev.target) {
            setSelectedUserName(ev.target.value)
        }
    }

    return (
        <Box>
            <Select value={selectedUserName} onChange={handleUserChange}>
                {users.map(user => (
                    <option value={user.id}>{user.name}</option>
                ))}
            </Select>
        </Box>
    )
}