import React from "react";
import {
  MenuItem,
  Menu,
  Button
} from "@material-ui/core";

import { useSelector } from "react-redux";
import { usersSelector } from "../store/selectors";


export const Users = () => {
  const users = useSelector(usersSelector);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event: any) => {
    console.log(event.currentTarget.getAttribute("data-id"));
    setAnchorEl(null);
  };

  return (
    <>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Select User
      </Button>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {users.map((user) => (
          <MenuItem onClick={handleClose} data-id={user.id} key={user.id}>{user.name}</MenuItem>
        ))}
      </Menu>
    </>
  );
};
