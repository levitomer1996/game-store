import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
//Hooks
import { useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import useGetProductDetails from "../../../hooks/useGetProductDetails";

const ProductPage = () => {
  const [details, getProdDetails, spinner] = useGetProductDetails();
  const classes = useStyles();
  const { id } = useParams("/prod/:id");
  useEffect(() => {
    getProdDetails(id);
  }, [id]);
  return (
    <Grid container>
      {spinner ? <CircularProgress /> : null}
      <Grid item xs={12} sm={8}>
        <Grid container>
          <Grid item xs={12} sm={2}>
            <img src={details.img} className={classes.img} />
          </Grid>
          <Grid item xs={12} sm={10}></Grid>
        </Grid>
      </Grid>{" "}
      <Grid item xs={12} sm={4}></Grid>
    </Grid>
  );
};

const useStyles = makeStyles((theme) => ({
  img: { width: 250, height: 250 },
}));
export default ProductPage;
