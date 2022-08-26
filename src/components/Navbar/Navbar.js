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
      <AppBar
        style={{ background: "#fff" }}
        sm={{
          width: " 100%",
          boxShadow: "none",
          borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
        }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            color="black"
            sm={{
              flexGrow: 1,
              alignItems: "center",
              display: "flex",
              textDecoration: "none",
            }}
          >
            <StorefrontIcon
              height="20px"
              ml="10px"
              color="secondary"
              pt="5px"
            />
            MajorMart
          </Typography>
          <div sm={{ flexGrow: 1 }} />
          <div ml={10}>
            <IconButton
              aria-label="show Cart Item"
              style={{ color: "black"}}
            >
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
