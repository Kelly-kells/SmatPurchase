import React from "react";
import {
  Card,
  CardMedia,
  Typography,
  CardContent,
  CardActions,
  IconButton,
} from "@mui/material";
import AddShoppingCart from "@mui/icons-material/AddShoppingCart";


const Product = ({ product }) => {
 
  return (
    <Card style={{ maxWidth: '100%'}}>
      <CardMedia style={{height: 100,
      paddingTop: '56.25%'}} component="img" image={product.image} title={product.name} />
      <CardContent  style={{display: 'flex',
      justifyContent: 'space-between'}}>
        <div >
          <Typography varient="h5" gutterBottom>
            {product.name}
          </Typography>
          <Typography varient="h5">{product.price}</Typography>
        </div>
        <Typography variant="body2" color="textSecondary">
          {product.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing style={{display: 'flex',
      justifyContent: 'flex-end'}}>
        <IconButton aria-label="Add to cart">
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Product;
