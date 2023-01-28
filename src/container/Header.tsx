import { Tabs, Tab } from "@mui/material";
import React, { useState } from "react";

export const Header = () => {
  const [value, setValue] = useState(0);

  const handleChange = ({ target }: React.SyntheticEvent<Element, Event>) => {};

  return (
    <div>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="secondary"
        textColor="inherit"
        variant="fullWidth"
        aria-label="full width tabs example"
      >
        <Tab label="Item One" />
        <Tab label="Item Two" />
        <Tab label="Item Three" />
      </Tabs>
    </div>
  );
};
