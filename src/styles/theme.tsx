import PKOFontLight from "../styles/fonts/PKOBankPolski-Bold.woff";
import PKOFontRegular from "../styles/fonts/PKOBankPolski-Regular.woff";
import PKOFontBold from "../styles/fonts/PKOBankPolski-Bold.woff";

import {
  ThemeProvider as MUIThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";

const theme = createMuiTheme({
  props: {
    MuiButtonBase: {
      disableRipple: true,
    },
    MuiCheckbox: {
      disableRipple: true,
    },
  },
  palette: {
    primary: {
      main: "#001E4B",
    },
    secondary: {
      main: "#F2F2F2",
    },
    text: {
      primary: "#000",
      secondary: "#526578",
    },
    error: {
      main: "#F03D52",
    },
    background: {
      default: "#F7F8F9",
      paper: "#ffffff",
    },
    common: {
      white: "#ffffff",
    },
  },
  typography: {
    fontFamily: ["PKOBankPolski", "Robot"].join(","),
    h1: {
      fontSize: 48,
      lineHeight: "56px",
      fontWeight: 700,
    },
    h2: {
      fontSize: 34,
      lineHeight: "42px",
      fontWeight: 700,
    },
    h3: {
      fontSize: 24,
      lineHeight: "32px",
      fontWeight: 500,
    },
    h4: {
      fontSize: 20,
      lineHeight: "26px",
      fontWeight: 500,
    },
    h5: {
      fontSize: 18,
      fontWeight: 500,
    },
    h6: {
      fontSize: 16,
      fontWeight: 500,
    },
    subtitle1: {
      fontSize: 18,
      fontWeight: 400,
      lineHeight: "24px",
    },
    subtitle2: {
      fontSize: 18,
      fontWeight: 600,
      lineHeight: "24px",
    },
    body1: {
      fontSize: 15,
      lineHeight: "22px",
      fontWeight: 400,
    },
    body2: {
      fontSize: 15,
      lineHeight: "22px",
      fontWeight: 600,
    },
    button: {
      fontSize: 13,
      lineHeight: "16px",
      fontWeight: 600,
    },
    caption: {
      fontSize: 12,
      lineHeight: "16px",
      fontWeight: 400,
    },
    overline: {
      fontSize: 12,
      lineHeight: "16px",
      fontWeight: 700,
    },
  },
  overrides: {
    MuiInputBase: {
      input: {
        fontSize: 16,
        color: "#30313E",
      },
    },
    MuiButton: {
      root: {
        height: 48,
      },
    },
    MuiAppBar: {
      root: {
        height: 72,
      },
      colorPrimary: {
        backgroundColor: "#ffffff",
        boxShadow: "0px 4px 4px #ECECF0",
      },
    },
    MuiSelect: {
      select: {
        "&:focus": {
          backgroundColor: "#F7F8F9",
        },
      },
    },
    MuiPaper: {
      rounded: {
        borderRadius: 8,
      },
      elevation1: {
        boxShadow: "0px 4px 4px #ECECF0",
      },
    },
    MuiCssBaseline: {
      "@global": {
        "@font-face": [
          {
            fontFamily: "Inter",
            fontStyle: "normal",
            fontDisplay: "swap",
            fontWeight: 300,
            src: `
            local('Inter'),
            local('Inter-Light'),
            url(${PKOFontLight}) format('woff')
            `,
          },
          {
            fontFamily: "Inter",
            fontStyle: "normal",
            fontDisplay: "swap",
            fontWeight: 400,
            src: `
            local('Inter'),
            local('Inter-Regular'),
            url(${PKOFontRegular}) format('woff')
            `,
          },
          {
            fontFamily: "Inter",
            fontStyle: "normal",
            fontDisplay: "swap",
            fontWeight: 700,
            src: `
            local('Inter'),
            local('Inter-Bold'),
            url(${PKOFontBold}) format('woff2')
            `,
          },
        ],
      },
    },
  },
});

export const ThemeProvider: React.FC = ({ children }) => (
  <MUIThemeProvider theme={theme}>
    <CssBaseline />
    {children}
  </MUIThemeProvider>
);
