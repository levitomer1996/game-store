import React, { useEffect, useState, useContext } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import CartContext from "../../../../Contex/CartContext";

const PreOrderCard = ({
  description,
  img,
  price,
  name,
  cartDetails,
  addToCartFunction,
}) => {
  const classes = useStyles();
  return (
    <div style={{ marginRight: "3%", marginBottom: "1%" }}>
      <div className={classes.img} style={{ backgroundImage: `url(${img})` }}>
        <div
          style={{
            width: "500px",
            height: "100px",
          }}
        ></div>
        <div className={classes.productExplanation}>{description}</div>
        <Grid
          container
          direction="row"
          justify="flex-end"
          alignItems="center"
          className={classes.buttonDiv}
        >
          <Button
            variant="contained"
            className={classes.addToCartBtn}
            onClick={() => {
              addToCartFunction(cartDetails);
              console.log("tomer");
            }}
          >
            Add to cart
          </Button>
          <Button variant="contained" className={classes.btn}>
            Pre-order {price}$
          </Button>
        </Grid>
      </div>
    </div>
  );
};

const PreOrderContainer = ({ prod }) => {
  const { addToCart } = useContext(CartContext);
  const [list, setList] = useState([]);
  useEffect(() => {
    if (prod === undefined) {
      return;
    }
    setList(prod);
  }, [prod]);

  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      style={{
        backgroundImage: `url(${"https://i.imgur.com/GiL9tYz.jpg"})`,
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100vh",
      }}
    >
      {list.map((p) => {
        return (
          <PreOrderCard
            img={p.img}
            description={p.description}
            title={p.name}
            price={p.price}
            cartDetails={p}
            addToCartFunction={addToCart}
          />
        );
      })}
    </Grid>
  );
};

const useStyles = makeStyles((theme) => ({
  img: {
    backgroundRepeat: "no-repeat",

    [theme.breakpoints.down("sm")]: { backgroundSize: "100% 300px" },
    [theme.breakpoints.up("lg")]: { backgroundSize: "500px 300px" },
  },
  productExplanation: {
    backgroundColor: "#808080a6",
    textOverflow: "ellipsis",
    overflow: "hidden",
    [theme.breakpoints.down("sm")]: { width: "100%", height: "150px" },
    [theme.breakpoints.up("lg")]: { width: "500px", height: "150px" },
  },
  btn: {
    backgroundColor: "#ffc107",
    color: "white",
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: "red",
    },
  },
  buttonDiv: {
    height: "50px",
    width: "500px",
    backgroundColor: "#808080a6",
  },
  addToCartBtn: {
    backgroundColor: "red",
    color: "white",
    fontWeight: "bold",
    marginRight: theme.spacing(3),
    "&:hover": {
      backgroundColor: "#ffc107",
    },
  },
}));
export default PreOrderContainer;
