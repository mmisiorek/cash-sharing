import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Headercomponent } from "./header.component";
import { useSelector } from "react-redux";
import { selectActiveUser } from "../../store/user/userState.selector";
import { Users } from "../Users";

const useStyles = makeStyles(({ palette }) => ({
  test: {
    width: "100%",
    backgroundColor: palette.background.default,
    "&:focus": {
      background: "red",
    },
  },
}));

interface LayoutProps {
    children: React.ReactNode;
}

const LayoutComponent: React.FC<LayoutProps> = ({ children }) => {
    const currentUser = useSelector(selectActiveUser);
    const classes = useStyles();
    return (
        <>
            {JSON.stringify(currentUser)}
            { !!currentUser?.id && <Headercomponent />}
            { !currentUser?.id && <Users />}
            { !!currentUser?.id && children}
            
        </>
    );
};

export default LayoutComponent;