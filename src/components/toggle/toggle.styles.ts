import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(({ palette }) => ({
  selectedToggle: {
    fontWeight: "bold",
  },
  notSelectedToggle: {
    color: palette.text.secondary,
  },
}));
