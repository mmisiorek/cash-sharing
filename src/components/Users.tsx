import React from "react";
import { MenuItem, Menu, Button } from "@material-ui/core";

import { useSelector } from "react-redux";
import { userSelector, usersSelector } from "../store/selectors";

import { userStateActions } from "../store/user/userState.slice";

export const Users = () => {
  const users = useSelector(usersSelector);
  const currentUser = useSelector(userSelector);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const setUser = (uid: string) => {
    userStateActions.addState({ user: users.find(user => user.id === uid) || null });
  }
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event: any) => {
    const choosenId = event?.currentTarget?.getAttribute("data-id");
    if(choosenId) {
      setUser(choosenId);
    }
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        Select User
      </Button>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {users.map((user) => (
          <MenuItem onClick={handleClose} data-id={user.id} key={user.id}>
            {user.name}
          </MenuItem>
        ))}
      </Menu>
      <div>
        {JSON.stringify(currentUser.entities)}
      </div>
    </>
  );
};
