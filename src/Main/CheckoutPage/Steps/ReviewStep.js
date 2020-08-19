import React, { useContext, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ReviewCard from "./comps/ReviewCard";

//Context
import CheckoutContext from "./CheckOutPage.Context";
import CartContext from "../../../Contex/CartContext";
import { Button, Typography } from "@material-ui/core";
import ProductAmmountResolver from "./hooks/ProductAmmountResolver";

const useStyles = makeStyles((theme) => ({
  root: { width: "60%" },
  card: { width: "100%" },
  submitBtn: {
    backgroundColor: "turquoise",
    color: "black",
    fontWeight: "bold",
    fontFamily: "cursive",
    marginRight: "10px",
  },
  add_more_btn: {
    backgroundColor: "#ffc10799",
    color: "black",
    fontWeight: "bold",
    fontFamily: "cursive",
    marginRight: "10px",
  },
}));

const ReviewStep = () => {
  const classes = useStyles();
  const { step, handleNext } = useContext(CheckoutContext);
  const { cartItems } = useContext(CartContext);
  const [items, setItems] = useState([]);
  const [total_Price, setTotalPrice] = useState(0);
  useEffect(() => {
    setItems(ProductAmmountResolver(cartItems));
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    const list = [0];
    cartItems.map((item) => {
      list.push(item.price);
    });
    setTotalPrice(list.reduce(reducer));
  }, [cartItems]);

  return (
    <Grid
      container
      direction="column"
      justify="space-between"
      alignItems="center"
    >
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
        className={classes.root}
      >
        {items.map((item) => {
          return (
            <ReviewCard
              key={item.item._id}
              name={item.item.name}
              price={item.item.price}
              count={item.count}
              img={item.item.img}
            />
          );
        })}
      </Grid>
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
        className={classes.root}
        spacing={3}
      >
        <Grid item>
          <Button
            onClick={() => {
              handleNext();
            }}
            variant="contained"
            className={classes.submitBtn}
          >
            Approve and keep up
          </Button>
          <Button
            onClick={() => {
              handleNext();
            }}
            variant="contained"
            className={classes.add_more_btn}
          >
            I would like to add more products
          </Button>
        </Grid>
        <Grid item>
          <Typography variant="h5">
            Total: <strong>{total_Price}$</strong>
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ReviewStep;
