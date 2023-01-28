import { Box, Grid } from "@mui/material";
import { IProduct } from "../../../interfaces";
import { YouMight } from "../Cart/YouMight";
import { ProductCard } from "./ProductCard";

interface Props {
  products: IProduct[];
  currentCategory: string;
}

export const ProductList = ({ products, currentCategory }: Props) => {
  const filteredProducts =
    currentCategory === "All products"
      ? products
      : products.filter((product) => product.type.toLowerCase() === currentCategory.toLowerCase());

  if (filteredProducts.length < 1) {
    return (
      <Box className="flex_center" flexDirection="column" gap={14}>
        <h3>We did not find products of this type :(</h3>

        <YouMight products={products.slice(0, 4)} />
      </Box>
    );
  }

  return (
    <Grid container spacing={4}>
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </Grid>
  );
};
