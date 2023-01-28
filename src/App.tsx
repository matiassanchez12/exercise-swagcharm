import React, { useContext, useState } from "react";
import { Tabs, Tab, Box } from "@mui/material";

import { Layout } from "./components";
import { categories, products } from "./constants";
import { ProductList } from "./components/ui/Products/ProductList";
import { Cart, Search } from "./container";
import { CartContext } from "./context";

function App() {
  const { tabIndex, updateTabIndex, search } = useContext(CartContext);

  const handleChange = (_: React.SyntheticEvent<Element, Event>, value: number) => {
    updateTabIndex(value);
  };

  return (
    <Layout>
      <Tabs value={tabIndex} onChange={handleChange} aria-label="tabs-control">
        {categories.map((category, index) => (
          <Tab key={index} label={category} disableRipple />
        ))}
      </Tabs>

      <Box className="section_padding" pt={"32px"}>
        {categories.length + 1 === tabIndex && <Cart />}

        {categories.length + 2 === tabIndex && <Search products={products} search={search} />}

        {tabIndex < categories.length && <ProductList products={products} currentCategory={categories[tabIndex]} />}
      </Box>
    </Layout>
  );
}

export default App;
