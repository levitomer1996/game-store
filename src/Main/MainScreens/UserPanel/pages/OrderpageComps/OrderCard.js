import React from "react";
import { Grid } from "@material-ui/core";

const OrderCard = ({ key, timePlaced, total, num, status }) => {
  return (
    <Grid
      container
      direction="row"
      justify="flex-start"
      alignItems="flex-start"
      style={{ borderBottom: "1px solid", padding: "7px" }}
    >
      <Grid item xs={12} sm={4}>
        {num}
      </Grid>
      <Grid item xs={12} sm={4}>
        {timePlaced}
      </Grid>
      <Grid item xs={12} sm={2}>
        Products
      </Grid>

      <Grid item xs={12} sm={1}>
        {status}
      </Grid>
      <Grid item xs={12} sm={1}>
        {total} - <strong>USD$</strong>
      </Grid>
    </Grid>
  );
};

export default OrderCard;
