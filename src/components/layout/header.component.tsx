import React from "react";
import mainLogo from'./logo.png';
import { makeStyles } from "@material-ui/core/styles";
import { UserDetails } from "./userDetails.component";

const useStyles = makeStyles({
  header: {
    padding: 8,
    background: "white",
    display: "flex",
    justifyContent: "space-between",
    borderBottom: "1px solid #001E4B",
  },
  logo: {
    width: "auto",
    height: 48,
  },
});
export const Headercomponent: React.FC= () => {
    const classes = useStyles();
    return (
        <>
          <div className={classes.header}>
            <img className={classes.logo} src={mainLogo} alt="cash-sharing"/>
            <UserDetails />
          </div>
        </>
    );
};
