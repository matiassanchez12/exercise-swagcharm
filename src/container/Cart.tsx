import { Box, Button, CardMedia, Divider, Typography } from "@mui/material";
import { useContext, useState } from "react";
import { Summary, YouMight } from "../components";
import { products } from "../constants";
import { CartContext } from "../context";
import paletteTheme from "../themes/palette";
import { ICartProduct } from "../interfaces/cart";
import { CartProduct } from "../components/ui/Cart/CartProduct";

export const Cart = () => {
  const { cart, numberOfItems, removeCartProduct, updateProductQuantity } = useContext(CartContext);

  const handleRemove = (product: ICartProduct) => {
    removeCartProduct(product);
  };

  const handleUpdate = (product: ICartProduct, quantity: number) => {
    updateProductQuantity({
      ...product,
      quantity: quantity,
    });
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

          {cart.length === 0 && <p>There are no products in the cart yet</p>}

          {cart.map((p) => {
            return <CartProduct product={p} handleRemove={handleRemove} handleUpdate={handleUpdate} />;
          })}
        </Box>

        <Summary />
      </Box>

      <YouMight products={products.slice(0, 4)} />
    </div>
  );
};
