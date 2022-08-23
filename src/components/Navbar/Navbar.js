import React from 'react'
import { AppBar, ToolBar, IconButton, Badge, MenuItem, Menu, Typography } from '@mui/material'
import {ShoppingCart} from "@mui/icons-material"
import {makeStyles} from "@mui/styles";
import StorefrontIcon from '@mui/icons-material/Storefront';
const Navbar = () => {

    const classes = makeStyles();
  return (
    <div>
        <AppBar position='fixed' className={classes.appBar} color="inherit">
        <ToolBar>
            <Typography variant='h6' className={classes.tittle} color="inherit">
            <StorefrontIcon height="20px" className={classes.image} color="fcf300" />
            MajorMart
            </Typography>
        </ToolBar>


        </AppBar>
    </div>
  )
}

export default Navbar