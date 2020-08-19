import React, { useContext, useEffect, useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import { makeStyles } from "@material-ui/core/styles";
//Matrial
import { Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import PersonIcon from "@material-ui/icons/Person";
import ListIcon from "@material-ui/icons/List";
import SearchIcon from "@material-ui/icons/Search";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import IconButton from "@material-ui/core/IconButton";
import CartModal from "./Comps/CartModal";

//Router
import { Link, Redirect } from "react-router-dom";
//Context
import AuthContext from "../../Contex/AuthContext";
import CartContext from "../../Contex/CartContext";

import { list } from "./CategoriesList";
import LoginPopover from "./Comps/LoginPopover";
import UserIconButton from "./Comps/UserIconButton";
import useGetUserCart from "../../hooks/useGetUserCart";

const Header = () => {
  const classes = useStyles();
  const { authState } = useContext(AuthContext);
  const { cartItems } = useContext(CartContext);
  const [getCart] = useGetUserCart();
  const [redirectToUserPanel, setRedirectToUserPanel] = useState(false);
  const handleRedirectToUserPanel = async () => {
    await setRedirectToUserPanel(true);
    await setRedirectToUserPanel(false);
  };
  useEffect(() => {
    getCart();
  }, []);

  return (
    <header className={classes.pcScreenHeader}>
      {redirectToUserPanel ? <Redirect to="/userpanel" /> : null}
      <div style={{ backgroundColor: "#3a3f40" }}>
        <IconButton>
          <InstagramIcon fontSize="large" style={{ color: "#FFC107" }} />
        </IconButton>
        <IconButton>
          <FacebookIcon fontSize="large" style={{ color: "#FFC107" }} />
        </IconButton>
        <IconButton>
          <TwitterIcon fontSize="large" style={{ color: "#FFC107" }} />
        </IconButton>
      </div>
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
        style={{ backgroundColor: "#3a3f40" }}
      >
        <Grid item xs={6}>
          <Typography className={classes.title} href={"/"}>
            Gaming store
          </Typography>
        </Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={3}>
          {authState.isLogged ? (
            <UserIconButton redirect={handleRedirectToUserPanel} />
          ) : (
            <LoginPopover />
          )}
          <CartModal data={cartItems} />
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
        style={{ backgroundColor: "#3a3f40" }}
      >
        {list.map((item) => {
          return (
            <Link
              to={`/category/${item.link}`}
              className={classes.categoryItem}
            >
              {item.title}
            </Link>
          );
        })}
      </Grid>
    </header>
  );
};
const useStyles = makeStyles((theme) => ({
  pcScreenHeader: { [theme.breakpoints.down("sm")]: { display: "none" } },
  root: {
    display: "grid",
    gridTemplateColumns: "20% 80%",
    backgroundColor: "#3a3f40",
  },
  title: {
    color: "#FFC107",
    fontSize: 50,
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(6),
    fontWeight: "bold",
  },

  searchInnput: {
    height: "31px",
    width: "225px",
    border: "2px #ffc107b8 solid",
    alignSelf: "center",
  },
  searchButton: {
    height: "38px",
    backgroundColor: "#ffc107",
  },
  categoryItem: {
    textDecoration: "none",
    color: "orange",
    marginLeft: theme.spacing(3),
    "&:hover": {
      color: "black",
    },
  },
}));
export default Header;
