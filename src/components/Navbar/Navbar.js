import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  MenuItem,
  Menu,
  Typography,
} from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";

import StorefrontIcon from "@mui/icons-material/Storefront";

const Navbar = () => {
  
  return (
    <div>
      <AppBar style={{ background: 'white' }} sm={{width:" 100%", boxShadow: "none",borderBottom: "1px solid rgba(0, 0, 0, 0.12)", color: "black"} }>
        <Toolbar>
          <Typography variant="h6" color="black" sm={{flexGrow: 1,
    alignItems: "center",
    display: "flex",
    textDecoration: "none",}}>
            <StorefrontIcon
              height="20px"
              ml="10px"
              color="secondary"
            />
            MajorMart
          </Typography>
          <div sm={{ flexGrow: 1 }} />
          <div >
            <IconButton aria-label="show Cart Item" color="inherit">
              <Badge badgeContent={2} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
