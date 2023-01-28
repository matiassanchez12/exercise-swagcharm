import { Box, Button, CardMedia, Divider, Typography } from "@mui/material";
import { useContext } from "react";
import { Summary, YouMight } from "../components";
import { products } from "../constants";
import { CartContext } from "../context";
import paletteTheme from "../themes/palette";
import { ICartProduct } from "../interfaces/cart";

export const Cart = () => {
  const { cart, numberOfItems, removeCartProduct } = useContext(CartContext);

  const handleRemove = (product: ICartProduct) => {
    removeCartProduct(product);
  };

  return (
    <div>
      <Box display="flex" flexDirection="row" justifyContent="space-between">
        <Box flex={1}>
          <Typography fontSize="24px" fontWeight={700} color={paletteTheme.palette.primary.main} mb="40px">
            Your Cart
            <Typography fontSize="18px" color={paletteTheme.palette.grey[600]} marginLeft={1} component="span">
              ({numberOfItems})
            </Typography>
          </Typography>

          {cart.length === 0 && <p>No hay productos en el carrito</p>}

          {cart.map((p) => {
            return (
              <Box>
                <Box display="flex" justifyContent="space-between" sx={{ paddingRight: 4 }}>
                  <Box display="flex" gap={4}>
                    <Box className="flex_center" flexDirection="column">
                      <img
                        src={p.images[0]}
                        alt={p.title}
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
                        {p.type}
                      </Typography>
                    </Box>

                    <Box>
                      <Box>
                        <Box display="flex" flexDirection="column">
                          <Typography
                            fontSize="18px"
                            fontWeight={700}
                            color={paletteTheme.palette.primary.contrastText}
                          >
                            {p.title}
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
                                value={p.quantity}
                              >
                                <option value="4">4</option>
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
                              {p.title}
                            </Typography>
                          </ul>
                        </Box>
                      </Box>

                      <Box className="flex_center" gap={1}>
                        <Button variant="text" sx={{ color: paletteTheme.palette.primary.contrastText }}>
                          Edit Pack
                        </Button>
                        <Divider orientation="vertical" flexItem sx={{ height: "20px", alignSelf: "center" }} />
                        <Button
                          onClick={() => handleRemove(p)}
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
                      ${p.price}
                    </Typography>
                    <Typography
                      fontSize="18px"
                      fontWeight={600}
                      sx={{ color: paletteTheme.palette.primary.contrastText }}
                    >
                      Total: ${p.price * p.quantity}
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ padding: "24px 0", paddingRight: 4 }}>
                  <Divider />
                </Box>
              </Box>
            );
          })}
        </Box>

        <Summary />
      </Box>

      <YouMight products={products.slice(0, 4)} />
    </div>
  );
};
