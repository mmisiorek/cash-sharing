import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { selectActiveUser } from "../../store/user/userState.selector";
import { useDispatch, useSelector } from "react-redux";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { userStateActions } from "../../store/user/userState.slice";
import { StoreDispatch } from "../../store/index.types";
import { UserStateType } from "../../store/users";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({});
export const UserDetails: React.FC = () => {
  const currentUser = useSelector(selectActiveUser);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const dispatch = useDispatch<StoreDispatch>();

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const logout = () => {
    const userPayload: UserStateType = {
      user: {
        id: "",
        name: "",
        allowances: [],
        balance: 0,
      },
    };

    dispatch(userStateActions.addState(userPayload));
    handleClose();
  };
  return (
    <>
      <Button>Ballance: {currentUser?.balance} PLN</Button>
      <Button aria-haspopup="true" onClick={handleClick}>
        {currentUser?.name}
      </Button>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={logout}>Wyloguj</MenuItem>
      </Menu>
    </>
  );
};
