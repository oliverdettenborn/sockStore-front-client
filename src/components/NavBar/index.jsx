import React, { useContext } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Typography,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import CartContext from "../../context/CartContext";

import useStyles from "./styles";

const Navbar = () => {
  const classes = useStyles();
  const { cart } = useContext(CartContext);
  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography variant="h6" className={classes.title} color="inherit">
            <img
              src="./images/logo.png"
              alt="SockStore"
              height="100px"
              className={classes.image}
            />
          </Typography>
          <div className={classes.grow} />
          <div className={classes.button}>
            <IconButton aria-label="Mostrar ícones do carrinho" color="inherit">
              <Badge badgeContent={cart.length} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
