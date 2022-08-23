import React from 'react'
import { AppBar, ToolBar, IconButton, Badge, MenuItem, Menu, Typography } from '@mui/material'
import {ShoppingCart} from "@mui/icons-material"
import {makeStyles} from "@mui/styles";

const Navbar = () => {

    const classes = makeStyles();
  return (
    <div>
        <AppBar position='fixed' className={classes.appBar} color="inherit">
        <ToolBar>
            <Typography>
            <img src="" alt="" height="20px"/>
            </Typography>
        </ToolBar>


        </AppBar>
    </div>
  )
}

export default Navbar