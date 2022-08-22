import React from 'react'
import Grid from "@mui/material"
import Product from './product/Product'

const products =[
    {id:1, name: "watch", description: "check your time"},
    {id:2, name: "shoes", description: "Run it through"}
 ]

const Products = () => {
  return (
    <main>
  <Grid container justify="center" spacing={4}>
    {products.map((product)=>(
        <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product/>
        </Grid>
    ))}
  </Grid>
    </main>
  )
}

export default Products