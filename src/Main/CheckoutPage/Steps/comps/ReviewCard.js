import React, { useContext } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import { Typography } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import CheckoutContext from "../CheckOutPage.Context";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",

    borderBottom: "1px solid #0000001c",
    marginBottom: "20px",
    marginTop: "20px",
  },
}));

const ReviewCard = ({ name, img, price, count }) => {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="row"
      justify="flex-start"
      alignItems="flex-start"
      className={classes.root}
    >
      <Grid item xs={12} sm={1}>
        <Avatar src={img} />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography variant="h6" style={{ fontFamily: "cursive" }}>
          {name}
        </Typography>
      </Grid>
      <Grid item xs={12} sm={2} style={{ textAlign: "center" }}>
        <TextField
          id="standard-basic"
          label={"Quantity"}
          defaultValue={count}
          type="number"
        />
      </Grid>
      <Grid item xs={12} sm={3} style={{ textAlign: "center" }}>
        <Typography
          style={{
            fontWeight: "100",
            color: "gray",
            textDecoration: "underline",
          }}
        >
          Price: {price}$
        </Typography>
        <Typography
          style={{
            fontWeight: "100",
            color: "gray",
            textDecoration: "underline",
          }}
        >
          Total: {price * count}$
        </Typography>
      </Grid>
    </Grid>
  );
};

export default ReviewCard;
