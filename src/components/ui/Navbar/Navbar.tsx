import { AppBar, Toolbar, Box, IconButton, Button, Badge, Typography } from "@mui/material";
import { useContext } from "react";
import { userIcon, bagIcon } from "../../../assets";
import { categories } from "../../../constants";
import { CartContext } from "../../../context";
import { Searcher } from "./Searcher";

export const Navbar = () => {
  const { updateTabIndex, numberOfItems } = useContext(CartContext);

  return (
    <AppBar elevation={0}>
      <Toolbar>
        <Box className="flex_center">
          <Button variant="logo">logo</Button>
        </Box>

        <Box flex={1} className="flex_center">
          <Searcher />
        </Box>

        <Box className="flex_center" gap={2} paddingLeft={6}>
          <IconButton>
            <img src={userIcon} alt="user-icon" />
            <Typography color="white" fontSize="15px" marginLeft={2}>
              Sign in
            </Typography>
          </IconButton>

          <IconButton onClick={() => updateTabIndex(categories.length + 1)}>
            <Badge badgeContent={numberOfItems > 9 ? "+9" : numberOfItems || "0"} color="secondary">
              <img src={bagIcon} alt="bag-icon" />
            </Badge>
            <Typography color="white" fontSize="15px" marginLeft={2}>
              Cart
            </Typography>
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
