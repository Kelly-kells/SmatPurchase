import React from 'react'
import Grid from "@mui/material"
import Product from './Product/Product'

const products = [{
  id: 1, name:"watch", description: "standard classy watch", price: "50$"

},
{id:2, name:"macbook", description: "apple macbook", price: "50$"}
]

const Products = () => {

  return (
    <main>
      <Grid container justifyContent="center" spacing={4}>
 {products.map((product)=>(
  <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
    <Product product={product}/>
    </Grid>
 ))}
      </Grid>
    </main>
  )
}

export default Products