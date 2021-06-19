import React, { useEffect } from "react";
import { Card, MenuItem, Menu, Button, IconButton, CardMedia, CardContent, Typography, CardActions } from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";

import { usersSelector } from "../store/selectors";
import { userStateActions } from "../store/user/userState.slice";
import { UserStateType } from "../store/users";
import { StoreDispatch } from "../store/index.types";
import { selectActiveUser } from "../store/user/userState.selector";
import mainLogo from'./layout/logo.png';

const useStyles = makeStyles({
  wrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 480,
    height: "auto",
  },
  root: {
    maxWidth: 345,
    margin: "20px auto"
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
    backgroundSize: "contain"
  },
});

export const Users = () => {
  const classes = useStyles();
  const dispatch = useDispatch<StoreDispatch>();
  const users = useSelector(usersSelector);
  const currentUser = useSelector(selectActiveUser);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const setUser = (uid: string) => {
    const userPayload: UserStateType = {
      user: users.find((user) => user.id === uid) || null,
    };

    dispatch(userStateActions.addState(userPayload));
  };

  useEffect(() => {
    setUser(users[0].id);
  }, []);

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
      {!currentUser?.id && (<>
      <div className={classes.wrapper}></div>
        <Card className={classes.root}>
          <CardMedia
            className={classes.media}
            image={mainLogo}
            title="Paella dish"
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
            Kolejny raz zapomniałeś oddać znajomemu za obiad? Zostajesz po wakacjach z toną wspólnych rachunków? Starsi sąsiedzi po dostarczonych zakupach kolejny raz mają problem z wygenerowaniem przelewu? Nigdy więcej!<br/>
Nasz projekt opisuje implementacje przyjemnej i innowacyjnej opcji dzielenia się swoim rachunkiem do pewnej limitowanej wartości na określony czas.<br/>
Wybierz znajomego/ych<br/>
Ustaw kwotę<br/>
Ciesz się życiem!
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <Button
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleClick}
            >
              Select User <ExpandMoreIcon />
            </Button>
          </CardActions>
        </Card>
        </>
      )}
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
    </>
  );
};
