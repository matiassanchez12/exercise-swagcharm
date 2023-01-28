import { createTheme } from "@mui/material/styles";
import paletteTheme from "./palette";

export const lightTheme = createTheme(
  {
    components: {
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundColor: paletteTheme.palette.primary.contrastText,
            height: "88px",
            justifyContent: "center",
            padding: "0 92px",
            "& .MuiToolbar-root": {
              padding: 0,
            },
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
          body1: {
            fontSize: "15px",
            color: paletteTheme.palette.grey[600],
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
              borderRadius: "0",
              fontSize: "13px",
              width: "172px",
              height: "48px",
              ":hover": {
                transition: "all 0.3s ease-in-out",
                backgroundColor: paletteTheme.palette.grey[200],
              },
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
            width: "100%",
            height: "48px",
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
            width: "100%",
            height: "48px",
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
              right: "10.5px",
              top: 16,
              fontSize: "10px",
              fontWeight: "700",
              backgroundColor: "transparent",
            },
          },
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            fontSize: "15px",
            color: "black",
            background: paletteTheme.palette.info.main,
            borderRadius: "20px",
            "&:before": {
              display: "none",
              borderBottom: "0px !important",
            },
          },
        },
      },
      MuiTabs: {
        styleOverrides: {
          root: {
            backgroundColor: paletteTheme.palette.grey[300],
            height: "64px",
            display: "flex",
            padding: "0 92px",
            "& .MuiTabs-indicator": {
              backgroundColor: "transparent",
            },
          },
        },
      },
      MuiTab: {
        styleOverrides: {
          root: {
            height: "64px",
            display: "flex",
            marginRight: "22px",
            alignItems: "start",
            color: paletteTheme.palette.grey[500],
            textTransform: "none",
            fontSize: "15px",
            padding: 0,
            minWidth: 0,
            "&:hover": {
              color: paletteTheme.palette.secondary.main,
            },
            "&.Mui-selected": {
              color: paletteTheme.palette.secondary.main,
            },
          },
        },
      },
      MuiIconButton: {
        styleOverrides: {
          colorInfo: {
            ":hover": {
              backgroundColor: paletteTheme.palette.grey[600],
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
