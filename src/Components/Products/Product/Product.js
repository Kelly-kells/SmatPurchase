import React from 'react'
import {Card, CardMedia, CardContent, Typography, CardActions,IconButton}from "@mui/material"
import {AddShoppingCart} from "@mui/icons-material"

const Product = () => {
  return (
    <Card className={classes.root}>
  <CardMedia className={classes.media} image="" title={product.name}/>
  <CardContent>
    <div className={classes.CardContent}>
      <Typography varient="h5" gutterBottom>

      </Typography>
    </div>
  </CardContent>
        </Card>
  )
}

export default Product