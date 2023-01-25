import { createTheme } from "@mui/material/styles";

const paletteTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#3A4451",
      contrastText: "#091625",
    },
    secondary: {
      main: "#3A64D8",
    },
    info: {
      main: "#ffffff",
    },
    grey: {
      "300": "#E6E8E9",
      "400": "#CED0D3",
      "500": "#535C67",
      "600": "#6B737C",
      "700": "#848A92",
    },
  },
});

export default paletteTheme;
