import { Box, Typography, Button, Divider } from "@mui/material";
import { ChangeEvent, useState } from "react";
import { ICartProduct } from "../../../interfaces/cart";
import paletteTheme from "../../../themes/palette";

interface Props {
  product: ICartProduct;
  handleRemove: (product: ICartProduct) => void;
  handleUpdate: (product: ICartProduct, quantity: number) => void;
}

export const CartProduct = ({ product, handleRemove, handleUpdate }: Props) => {
  const [quantity, setQuantity] = useState(product.quantity);

  const handleOnChange = ({ target }: ChangeEvent<HTMLSelectElement>) => {
    setQuantity(Number(target.value));
  };

  return (
    <Box>
      <Box display="flex" justifyContent="space-between" sx={{ paddingRight: 4 }}>
        <Box display="flex" gap={4}>
          <Box className="flex_center" flexDirection="column">
            <img
              src={product.images[0]}
              alt={product.title}
              style={{ borderRadius: "5px", width: "120px", height: "120px", objectFit: "cover" }}
            />

            <Typography
              mt="10px"
              sx={{
                fontSize: "10px",
                fontWeight: 600,
                padding: "2px 4px",
                textTransform: "uppercase",
                backgroundColor: paletteTheme.palette.grey[300],
                color: paletteTheme.palette.grey[700],
              }}
            >
              {product.type}
            </Typography>
          </Box>

          <Box>
            <Box>
              <Box display="flex" flexDirection="column">
                <Typography fontSize="18px" fontWeight={700} color={paletteTheme.palette.primary.contrastText}>
                  {product.title}
                </Typography>
                <Typography fontWeight={600} color={paletteTheme.palette.primary.contrastText}>
                  Quantity
                  <Typography
                    fontWeight={700}
                    color={paletteTheme.palette.primary.contrastText}
                    marginLeft={1}
                    component="span"
                  >
                    <select
                      name="quantity"
                      className="select_custom"
                      style={{ textDecoration: "underline" }}
                      onChange={handleOnChange}
                      value={quantity}
                    >
                      {Array.from(Array(60).keys()).map((_, index) => (
                        <option value={index + 1}>{index + 1}</option>
                      ))}
                    </select>
                  </Typography>
                </Typography>
              </Box>
              <Box display="flex" flexDirection="column">
                <ul>
                  <Typography
                    fontSize="14px"
                    fontWeight={600}
                    color={paletteTheme.palette.primary.contrastText}
                    component="li"
                  >
                    {product.title}
                  </Typography>
                </ul>
              </Box>
            </Box>

            <Box className="flex_center" gap={1}>
              <Button
                variant="text"
                sx={{ color: paletteTheme.palette.primary.contrastText }}
                onClick={() => handleUpdate(product, quantity)}
              >
                Edit Pack
              </Button>
              <Divider orientation="vertical" flexItem sx={{ height: "20px", alignSelf: "center" }} />
              <Button
                onClick={() => handleRemove(product)}
                variant="text"
                sx={{ color: paletteTheme.palette.primary.contrastText }}
              >
                Remove
              </Button>
            </Box>
          </Box>
        </Box>

        <Box>
          <Typography
            fontSize="18px"
            fontWeight={700}
            sx={{ color: paletteTheme.palette.primary.contrastText, textAlign: "end" }}
          >
            ${product.price}
          </Typography>
          <Typography fontSize="18px" fontWeight={600} sx={{ color: paletteTheme.palette.primary.contrastText }}>
            Total: ${product.price * product.quantity}
          </Typography>
        </Box>
      </Box>

      <Box sx={{ padding: "24px 0", paddingRight: 4 }}>
        <Divider />
      </Box>
    </Box>
  );
};
