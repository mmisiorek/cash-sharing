import React from "react";
import mainLogo from'./logo.png';
import { makeStyles } from "@material-ui/core/styles";
import { UserDetails } from "./userDetails.component";

const useStyles = makeStyles({
  usersWrapper: {
    display: "flex",
    justifyContent: "flex-end",
  },
  logo: {
    width: "auto",
    height: 40
  },
  header: {
    background: "white",
    flexWrap: "wrap"

  }
});
export const Headercomponent: React.FC= () => {
    const classes = useStyles();
    return (
        <>
          <div className={classes.header}>
            <img className={classes.logo} src={mainLogo} alt="cash-sharing"/>
            <div className={classes.usersWrapper}>
                <UserDetails />
              </div>
            </div>
        </>
    );
};
