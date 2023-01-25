import { AppBar, Toolbar, Link, Box, IconButton, Button, Badge } from "@mui/material";
import { userIcon, bagIcon } from "../../assets";

export const Navbar = () => (
  <AppBar>
    <Toolbar>
      <Button variant="logo">logo</Button>

      <Box flex={1} />

      <IconButton>
        <img src={userIcon} alt="user-icon" />
      </IconButton>

      <Button>Sign in</Button>

      <Link>
        <IconButton>
          <Badge badgeContent={2} color="secondary">
            <img src={bagIcon} alt="bag-icon" />
          </Badge>
        </IconButton>
      </Link>
    </Toolbar>
  </AppBar>
);
