import { Grid, Card, CardActionArea, CardMedia, Box, Typography, Link, IconButton, Button } from "@mui/material";
import { useContext, useState } from "react";
import { IProduct } from "../../../interfaces";
import { ItemCounter } from "./ItemCounter";
import { CartContext } from "../../../context";

interface Props {
  product: IProduct;
}

export const ProductCard = ({ product }: Props) => {
  const { addProductToCart } = useContext(CartContext);
  const [value, setValue] = useState(1);

  const addProduct = () => {
    addProductToCart({
      id: product.id,
      images: [product.images[0]],
      price: product.price,
      title: product.title,
      quantity: value,
      type: product.type,
    });
  };

  const handleUpdateCount = (newValue: number) => {
    setValue((prev) => prev + newValue);
  };

  return (
    <Grid item xs={6} sm={4}>
      <Card>
        <Link>
          <CardActionArea>
            <CardMedia
              component="img"
              image={product.images[0]}
              alt={product.title}
              className="fadeIn"
              width={250}
              height={250}
              style={{ objectFit: "cover" }}
            />
          </CardActionArea>
        </Link>
      </Card>

      <Box className="fadeIn" sx={{ mt: 1 }} display="flex">
        <Box flex={2} sx={{ display: "flex", alignItems: "start", justifyContent: "center", flexDirection: "column" }}>
          <Typography fontWeight={700}>{product.title}</Typography>
          <Typography fontWeight={500}>${`${product.price}`}</Typography>
        </Box>
        <Box flex={1}>
          <ItemCounter currentValue={value} maxValue={100} handleUpdateCount={handleUpdateCount} />
        </Box>
      </Box>
      <Button onClick={addProduct} variant="outlined" sx={{ height: "30px", mt: "5px", color: "green", gap: "8px" }}>
        Buy
        <svg
          fill="currentColor"
          width={20}
          height={20}
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path d="M1 1.75A.75.75 0 011.75 1h1.628a1.75 1.75 0 011.734 1.51L5.18 3a65.25 65.25 0 0113.36 1.412.75.75 0 01.58.875 48.645 48.645 0 01-1.618 6.2.75.75 0 01-.712.513H6a2.503 2.503 0 00-2.292 1.5H17.25a.75.75 0 010 1.5H2.76a.75.75 0 01-.748-.807 4.002 4.002 0 012.716-3.486L3.626 2.716a.25.25 0 00-.248-.216H1.75A.75.75 0 011 1.75zM6 17.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15.5 19a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
        </svg>
      </Button>
    </Grid>
  );
};
