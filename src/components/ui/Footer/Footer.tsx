import { Box, Typography } from "@mui/material";
import { Column } from "./Column";
import { Contact } from "./Contact";
import paletteTheme from "../../../themes/palette";
import { Select } from "../";
import { useState } from "react";
import { argIcon, eeuuIcon } from "../../../assets";

export const Footer = () => {
  const [valueRegion, setValueRegion] = useState("unitedstates");
  const [valueLanguage, setValueLanguage] = useState("en");

  return (
    <Box
      display="flex"
      flexDirection="column"
      overflow="hidden"
      sx={{ backgroundColor: paletteTheme.palette.grey[300] }}
    >
      <Box padding="80px 331px 112px 92px" display="flex">
        <Contact marginRight="96px" />
        <Column
          headTitle="Our company"
          links={["Abous us", "FAQ", "Partneships", "Sustainability", "Blog"]}
          marginRight="252px"
        />
        <Column
          headTitle="Our company"
          links={["Abous us", "FAQ", "Partneships", "Sustainability", "Blog"]}
          marginRight="225px"
        />
        <Column headTitle="Our company" links={["Abous us", "FAQ", "Partneships", "Sustainability", "Blog"]} />
      </Box>

      <Box padding="0 96px 76px 92px" display="flex" justifyContent="space-between">
        <Typography fontSize="14px" color={paletteTheme.palette.grey[500]}>
          © 2022 Customer Products. All rights reserved.
        </Typography>
        <Box display="flex" gap="36px">
          <Box className="flex_center">
            <Typography>Region: </Typography>
            <Select
              value={valueRegion}
              handleOnChange={(value) => setValueRegion(value)}
              options={[
                { value: "unitedstates", text: "United States", icon: eeuuIcon },
                { value: "argentina", text: "Argentina", icon: argIcon },
              ]}
              icons
            />
          </Box>

          <Box className="flex_center">
            <Typography>Language: </Typography>
            <Select
              value={valueLanguage}
              handleOnChange={(value) => setValueLanguage(value)}
              options={[
                { value: "en", text: "English" },
                { value: "es", text: "Español" },
              ]}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
