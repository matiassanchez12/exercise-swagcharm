import { Box, Link, Typography } from "@mui/material";
import paletteTheme from "../../../themes/palette";

interface Props {
  headTitle: string;
  links: string[];
  marginRight?: string;
}

export const Column = ({ headTitle, links, marginRight }: Props) => {
  return (
    <Box display="flex" flexDirection="column" width={108} marginRight={marginRight}>
      <Typography
        fontSize="15px"
        fontWeight={700}
        marginBottom="24px"
        color={paletteTheme.palette.primary.contrastText}
      >
        {headTitle}
      </Typography>

      {links.map((link) => (
        <Link key={link} sx={{ cursor: "pointer", marginBottom: "24px" }} underline="hover">
          <Typography fontSize="15px" color={paletteTheme.palette.primary.main}>
            {link}
          </Typography>
        </Link>
      ))}
    </Box>
  );
};
