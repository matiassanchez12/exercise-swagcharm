import { createTheme } from "@mui/material/styles";
import paletteTheme from "./palette";

export const lightTheme = createTheme(
  {
    components: {
      MuiLink: {
        defaultProps: {
          underline: "none",
        },
      },
      MuiAppBar: {
        defaultProps: {
          elevation: 0,
        },
        styleOverrides: {
          root: {
            backgroundColor: paletteTheme.palette.primary.contrastText,
            height: 60,
          },
        },
      },
      MuiTypography: {
        styleOverrides: {
          h1: {
            fontSize: 30,
            fontWeight: 600,
          },
          h2: {
            fontSize: 24,
            fontWeight: 700,
          },
        },
      },
      MuiButton: {
        defaultProps: {
          disableElevation: true,
        },
        variants: [
          {
            props: { variant: "logo" },
            style: {
              backgroundColor: paletteTheme.palette.grey[400],
              color: paletteTheme.palette.grey[700],
              textTransform: "uppercase",
              borderRadius: "none",
              fontSize: "13px",
            },
          },
        ],
        styleOverrides: {
          root: {
            textTransform: "none",
            boxShadow: "none",
            ":hover": {
              transition: "all 0.3s ease-in-out",
            },
          },
          contained: {
            backgroundColor: paletteTheme.palette.primary.main,
            color: paletteTheme.palette.info.main,
            borderRadius: "8px",
            padding: "12px 24px",
            ":hover": {
              boxShadow: "none",
            },
          },
          outlined: {
            backgroundColor: paletteTheme.palette.info.main,
            color: paletteTheme.palette.primary.contrastText,
            border: `2px solid ${paletteTheme.palette.primary.contrastText}`,
            fontWeight: 700,
            borderRadius: "8px",
            padding: "12px 24px",
            ":hover": {
              border: `2px solid ${paletteTheme.palette.primary.contrastText}`,
            },
          },
        },
      },
      MuiCard: {
        defaultProps: {
          elevation: 0,
        },
        styleOverrides: {
          root: {
            boxShadow: "0px 5px 5px rgba(0,0,0,0.05)",
            borderRadius: "10px",
          },
        },
      },
      MuiBadge: {
        styleOverrides: {
          root: {
            "& .MuiBadge-badge": {
              right: 10,
              top: 13,
              padding: "0 4px",
              fontSize: "8px",
            },
          },
        },
      },
    },
  },
  paletteTheme
);

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    logo: true;
  }
}
