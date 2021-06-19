import React from "react";

import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

import { useSelector } from "react-redux";
import { usersSelector } from "../store/selectors";

export const Users = () => {
  const users = useSelector(usersSelector);

  return (
    <Select>
      {users.map((user) => (
        <MenuItem>{user.name}</MenuItem>
      ))}
    </Select>
  );
};
