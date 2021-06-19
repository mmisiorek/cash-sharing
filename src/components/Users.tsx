import React from "react";
import { MenuItem, Menu, Button } from "@material-ui/core";

import { useDispatch, useSelector } from "react-redux";
import { userSelector, usersSelector } from "../store/selectors";

import { userStateActions } from "../store/user/userState.slice";
import { UserStateType } from "../store/users";
import { StoreDispatch } from "../store/index.types";

export const Users = () => {
  const dispatch = useDispatch<StoreDispatch>();
  const users = useSelector(usersSelector);
  const currentUser = useSelector(userSelector);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const setUser = (uid: string) => {
    const userPayload: UserStateType = {
      user: users.find((user) => user.id === uid) || null,
    };

    dispatch(userStateActions.addState(userPayload));
  };
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event: any) => {
    const choosenId = event?.currentTarget?.getAttribute("data-id");
    if (choosenId) {
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
      <div>{JSON.stringify(currentUser.entities)}</div>
    </>
  );
};
