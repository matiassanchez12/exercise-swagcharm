import { Box, Button, IconButton, Typography } from "@mui/material";
import { facebookIcon, instagramIcon, linkedinIcon, phoneIcon, twitterIcon, youtubeIcon } from "../../../assets";

interface Props {
  marginRight: string;
}

export const Contact = ({ marginRight }: Props) => {
  return (
    <Box display="flex" flexDirection="column" marginRight={marginRight} width={264}>
      <Button variant="logo">Logo</Button>

      <Typography variant="body1" mt="24px">
        We sell custom products for all your needs. Packs and bulk products that you will enjoy.
      </Typography>

      <Box display="flex" mt="24px" alignItems="center">
        <img src={phoneIcon} alt="phone-icon" width={16} height={16} />
        <Typography marginLeft="8px" fontSize="15px" fontWeight={600} color="#091625">
          +1-202-555-0129
        </Typography>
      </Box>

      <Box mt="40px" display="flex" gap="16px">
        <IconButton color="info" sx={{ background: "#535C67", width: "32px", height: "32px" }}>
          <img src={facebookIcon} alt="facebook-icon" />
        </IconButton>
        <IconButton color="info" sx={{ background: "#535C67", width: "32px", height: "32px" }}>
          <img src={twitterIcon} alt="twitter-icon" />
        </IconButton>
        <IconButton color="info" sx={{ background: "#535C67", width: "32px", height: "32px" }}>
          <img src={instagramIcon} alt="instagram-icon" />
        </IconButton>
        <IconButton color="info" sx={{ background: "#535C67", width: "32px", height: "32px" }}>
          <img src={linkedinIcon} alt="linkedin-icon" />
        </IconButton>
        <IconButton color="info" sx={{ background: "#535C67", width: "32px", height: "32px" }}>
          <img src={youtubeIcon} alt="youtube-icon" />
        </IconButton>
      </Box>
    </Box>
  );
};
