import React from "react";
import mainLogo from'./logo.png';
import { makeStyles } from "@material-ui/core/styles";
import { Users } from "../Users";

const useStyles = makeStyles({
  usersWrapper: {
    display: "flex",
    justifyContent: "flex-end",
  },
  logo: {
    width: "auto",
    height: 40
  }
});
export const Headercomponent: React.FC= () => {
    const classes = useStyles();
    return (
        <>
           <img className={classes.logo} src={mainLogo} alt="cash-sharing"/>
           <div className={classes.usersWrapper}>
              <Users />
            </div>
        </>
    );
};
