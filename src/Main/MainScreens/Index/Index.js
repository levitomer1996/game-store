import React, { useEffect, useContext } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import IndexCarousel from "./Comps/Carousel";
import PreOrderContainer from "./Comps/PreOrder";
import usePreorders from "../../../hooks/usePreorders";
//Context
import ProductContext from "../../../Contex/ProductContext";

const Index = () => {
  const classes = useStyles();
  const { preOrderProducts } = useContext(ProductContext);
  const [handlePreOrders] = usePreorders();
  useEffect(() => {
    handlePreOrders();
  }, []);
  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      className={classes.root}
    >
      <IndexCarousel />
      <PreOrderContainer prod={preOrderProducts[0]} />
    </Grid>
  );
};

//styles
const useStyles = makeStyles((theme) => ({
  root: {},
}));

export default Index;
