import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Headercomponent } from "./header.component";

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
    const classes = useStyles();
    return (
        <>
            <Headercomponent />
            {children}
        </>
    );
};

export default LayoutComponent;