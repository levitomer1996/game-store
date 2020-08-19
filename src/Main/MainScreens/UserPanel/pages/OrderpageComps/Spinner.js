import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Grid } from "@material-ui/core";

const Spinner = () => {
  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <CircularProgress style={{ color: "#f3b81f" }} size={100} />
    </Grid>
  );
};
export default Spinner;
