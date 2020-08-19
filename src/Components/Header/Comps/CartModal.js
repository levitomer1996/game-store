import React, { useContext, useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import IconButton from "@material-ui/core/IconButton";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Paper from "@material-ui/core/Paper";
import { Typography, Button } from "@material-ui/core";
import CartContext from "../../../Contex/CartContext";
import Grid from "@material-ui/core/Grid";
import Badge from "@material-ui/core/Badge";
import Avatar from "@material-ui/core/Avatar";
import CancelIcon from "@material-ui/icons/Cancel";

//Hooks
import useCalculateCartTotalPrice from "../../../Contex/CartContext";

//Route
import { Redirect } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflowY: "scroll",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3, 1),
    width: "30rem",
    marginBottom: theme.spacing(1),
    overflowY: "scroll",
  },
  item: {
    backgroundColor: "#ffa5002b",
    marginBottom: theme.spacing(3),

    width: "25rem",
  },
  title: {
    color: "#FFC107",
    fontSize: 50,
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(6),
    fontWeight: "bold",
    borderBottom: "solid black 1px",
  },
}));
const CartItem = ({ name, img, price, removeItem }) => {
  const classes = useStyles();

  return (
    <Paper elevation={2} className={classes.item}>
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="center"
        spacing={3}
      >
        <Grid item>
          <Avatar alt="Remy Sharp" src={img} className={classes.large} />
        </Grid>
        <Grid item>
          <Typography style={{ fontWeight: "bold" }}>{name}</Typography>
        </Grid>
        <Grid item>
          <Typography style={{ fontWeight: "bold" }}>{price}$</Typography>
        </Grid>
        <Grid item>
          <IconButton>
            <CancelIcon style={{ color: "red" }} />
          </IconButton>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default function CartModal({ data }) {
  const classes = useStyles();
  const { cartItems } = useContext(CartContext);

  const [open, setOpen] = React.useState(false);
  const [CheckOutRedirect, setCheckOutRedirect] = useState(false);
  //Total Price
  const [total_Price, setTotalPrice] = useState(0);
  useEffect(() => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    const list = [0];
    cartItems.map((item) => {
      list.push(item.price);
    });
    setTotalPrice(list.reduce(reducer));
  }, [cartItems]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => console.log(cartItems));
  return (
    <div>
      {CheckOutRedirect ? <Redirect to="/checkout/id" /> : null}
      <label style={{ color: "#FFC107" }}>Cart</label>
      <IconButton onClick={handleOpen}>
        <Badge badgeContent={data.length} color="primary">
          <ShoppingCartIcon fontSize="large" style={{ color: "#FFC107" }} />
        </Badge>
      </IconButton>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">
              {cartItems.length === 0 ? (
                <Typography className={classes.title}>Cart is Empty</Typography>
              ) : (
                <div>
                  <Typography className={classes.title}>Your Cart</Typography>
                </div>
              )}
            </h2>
            {cartItems.map((item) => {
              return (
                <CartItem name={item.name} price={item.price} img={item.img} />
              );
            })}
            <Grid
              container
              direction="row"
              justify="flex-start"
              alignItems="center"
              spacing={3}
            >
              <Grid item>
                {cartItems.length === 0 ? null : (
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => {
                      setCheckOutRedirect(true);
                      setOpen(false);
                    }}
                    startIcon={<ShoppingCartIcon />}
                  >
                    {"Check-out"}
                  </Button>
                )}
              </Grid>{" "}
              <Typography variant="h4">
                {" "}
                Total price:<strong>{total_Price}$</strong>{" "}
              </Typography>
            </Grid>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
