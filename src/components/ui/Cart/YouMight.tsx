import { Grid, Box, Typography } from "@mui/material";
import { IProduct } from "../../../interfaces";
import paletteTheme from "../../../themes/palette";

interface Props {
  products: IProduct[];
}

export const YouMight = ({ products }: Props) => {
  return (
    <Box mt={12}>
      <Typography fontSize="24px" fontWeight={700} color={paletteTheme.palette.primary.main} mb="24px">
        You might also like
      </Typography>
      <Grid container rowGap={4}>
        {products.map((product) => (
          <Grid item xs={6} sm={4}>
            <img
              src={product.images[0]}
              alt={product.title}
              className="fadeIn"
              width="336px"
              height="336px"
              style={{ objectFit: "cover" }}
            />

            <Box sx={{ mt: "16px" }} display="flex" flexDirection="column">
              <Typography fontWeight={700} sx={{ color: paletteTheme.palette.primary.contrastText }}>
                {product.title}
              </Typography>
              <Box display="flex" sx={{ mt: "10px" }}>
                <Typography fontWeight={600} fontSize="15px" sx={{ color: "black" }}>
                  ${`${product.price}`}
                </Typography>
                <Typography fontSize="14px" sx={{ color: paletteTheme.palette.grey[600], marginLeft: "64px" }}>
                  Minimum: 5
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
