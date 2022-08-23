import React from "react";
import {Grid} from "@mui/material";
import Product from "./product/Product";
import wristWatch from "../assets/wristWatch.png"

const products = [
  { id: 1, name: "watch", description: "check your time", price: "$5", image: wristWatch},
  { id: 2, name: "shoes", description: "Run it through", price: "$10", image: "https://favpng.com/png_view/men-shoes-bata-shoes-bota-industrial-bata-industrials-steel-toe-boot-png/A23UFTBZ" },
];

const Products = () => {
  return (
    <main>
      <Grid container justifyContent="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
