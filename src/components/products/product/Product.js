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
import {makeStyles} from "@mui/styles";

const Product = ({ product }) => {
  const classes = makeStyles();
  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} component="img" image={product.image} title={product.name} />
      <CardContent>
        <div className={classes.cardComponent}>
          <Typography varient="h5" gutterBottom>
            {product.name}
          </Typography>
          <Typography varient="h5">{product.price}</Typography>
        </div>
        <Typography variant="body2" color="textSecondary">
          {product.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        <IconButton aria-label="Add to cart">
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Product;
