import { Box, Grid, Typography } from "@mui/material";
import { ProductCard } from "../components/ui/Products/ProductCard";
import { IProduct } from "../interfaces";

interface Props {
  products: IProduct[];
  search: string;
}

export const Search = ({ products, search }: Props) => {
  const filteredProducts = products.filter((p) => p.title.toLocaleLowerCase().includes(search));

  return (
    <Box>
      <Typography variant="h1" component="h1">
        Search Product
      </Typography>

      {filteredProducts.length > 0 ? (
        <>
          <Typography variant="h2" textTransform="capitalize" sx={{ mb: 1 }}>
            Term: {search}
          </Typography>

          <Grid container spacing={4} mt={6}>
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </Grid>
        </>
      ) : (
        <Box display="flex" gap={2}>
          <Typography variant="h2" sx={{ mb: 1 }}>
            We did not find any product for the search..
          </Typography>
        </Box>
      )}
    </Box>
  );
};
