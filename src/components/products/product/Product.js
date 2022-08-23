import React from 'react'
import {Card, CardMedia, Typography, CardContent, CardActions, IconBotton} from "@mui/material"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const Product = ({product}) => {
  return (
    <Card className={classes.root}>
  <CardMedia  className={ classes.media} image=""  title={product.name}/>
  <CardContent>
  <div className={classes.cardComponent}>
  <Typography varient="h5" gutterBottom>
    {product.name}
  </Typography>
  <Typography varient="h5" >
    {product.price}
  </Typography>
  </div>
  <Typography variant='h2' color="textSecondary">
  {product.description}
  </Typography>
  </CardContent>
    </Card>
  )
}

export default Product