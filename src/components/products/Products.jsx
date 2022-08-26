import React from "react";
import {Grid} from "@mui/material";
import Product from "./product/Product";
import wristWatch from "../assets/wristWatch.png"
import watch from "../assets/watch.png"

const products = [
  { id: 1, name: "watch", description: "check your time", price: "$5", image: wristWatch},
  { id: 2, name: "shoes", description: "Run it through", price: "$10", image: watch },
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
