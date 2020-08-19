import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import ShareIcon from "@material-ui/icons/Share";
import Button from "@material-ui/core/Button";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import ShareModal from "./ShareModal";
import isShowModalHandler from "./isShowModalHandler";

import { Redirect } from "react-router-dom";
import addProdToCart from "./addProdToCart";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    marginLeft: "3%",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  btn: { height: "50px", fontWeight: "bold" },
}));

const ProductCard = ({ title, img, key, price, id }) => {
  const [redirect, setRedirect] = useState(false);
  const [isShow, toggleShowModal] = isShowModalHandler();
  const classes = useStyles();
  const { addProd } = addProdToCart();
  return (
    <Card className={classes.root}>
      {redirect ? <Redirect to={`/prod/${id}`} /> : null}
      <CardHeader title={title} />
      <CardMedia className={classes.media} image={img} title="Paella dish" />
      <CardActions>
        <IconButton
          onClick={() => {
            toggleShowModal();
            console.log(isShow);
          }}
        >
          <ShareIcon style={{ color: "#FFC107" }} />
        </IconButton>
        <Button
          endIcon={<ShoppingCartIcon />}
          variant="contained"
          color="secondary"
          onClick={() => addProd(id)}
          className={classes.btn}
        >
          Add to cart {price}$
        </Button>
        <Button
          endIcon={<ShoppingCartIcon />}
          variant="contained"
          color={"secondary"}
          style={{ backgroundColor: "orange" }}
          onClick={() => setRedirect(true)}
          className={classes.btn}
        >
          View Product
        </Button>
        <ShareModal isShow={isShow} />
      </CardActions>
    </Card>
  );
};
export default ProductCard;
