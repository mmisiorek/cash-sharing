import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(({ palette }) => ({
  test: {
    width: "100%",
    backgroundColor: palette.background.default,
    "&:focus": {
      background: "red",
    },
  },
}));
