import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(({ palette }) => ({
  tab: {
    border: `1px solid ${palette.background.default}`,
    borderRadius: 8,
    height: 64,
  },
  selectedTab: {
    backgroundColor: palette.primary.main,
    color: "white",
  },
}));
