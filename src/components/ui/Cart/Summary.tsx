import { Box, Button, Divider, Typography } from "@mui/material";
import { useContext } from "react";
import { CartContext } from "../../../context";
import paletteTheme from "../../../themes/palette";

export const Summary = () => {
  const { numberOfItems, total } = useContext(CartContext);

  return (
    <Box>
      <Typography variant="h2" sx={{ color: paletteTheme.palette.primary.contrastText }}>
        Order Summary
      </Typography>
      <Box display="flex" justifyContent="space-between" sx={{ color: paletteTheme.palette.grey[600] }}>
        <Typography fontSize="16px" mt="24px">
          Number of items
        </Typography>
        <Typography fontSize="16px" mt="24px">
          {numberOfItems}
        </Typography>
      </Box>

      <Divider sx={{ m: "24px 0" }} />

      <Box
        display="flex"
        justifyContent="space-between"
        sx={{ color: paletteTheme.palette.primary.contrastText, mb: "32px" }}
      >
        <Typography fontSize="18px" fontWeight={600}>
          Total:
        </Typography>
        <Typography fontSize="24px" fontWeight={700}>
          ${total}
        </Typography>
      </Box>

      <Button variant="contained">Proceed to Checkout</Button>
      <Button variant="outlined" sx={{ mt: "12px" }}>
        Continue shopping
      </Button>
    </Box>
  );
};
