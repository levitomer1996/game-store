import React, { useContext, useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import CheckoutContext from "./CheckOutPage.Context";
import { Button, Typography } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import CircularProgress from "@material-ui/core/CircularProgress";
import Checkbox from "@material-ui/core/Checkbox";
import ErrorMessage from "./comps/ErrorMessage";

import useGetUserDetails from "../../../hooks/useGetUserDetails";

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
  proccedBtn: {
    backgroundColor: "turquoise",
    fontWeight: "bold",
    color: "black",
  },
  backBtn: {
    backgroundColor: "#ffc10799",
  },
}));

const ShipingDetails = () => {
  const classes = useStyles();
  const [getDetails, userDetails, spinner] = useGetUserDetails();
  const { handleNext, handleBack, setShipmentDetails } = useContext(
    CheckoutContext
  );

  //States
  const [f_name, set_f_name] = useState(null);
  const [l_name, set_l_name] = useState(null);
  const [adressOne, set_adressOne] = useState(null);
  const [adressTwo, set_adressTwo] = useState(null);
  const [postal_code, set_postal_code] = useState(null);
  const [city, set_city] = useState(null);
  const [country, set_county] = useState(null);
  const [checked, setChecked] = useState(null);

  const [isFetched, set_isFetched] = useState(false);
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  useEffect(() => {
    if (!isFetched) {
      getDetails();
      set_isFetched(true);
    }
    set_f_name(userDetails.f_name);
    set_l_name(userDetails.l_name);
    set_adressOne(userDetails.adressOne);
    set_adressTwo(userDetails.adressTwo);
    set_postal_code(userDetails.postal_code);
    set_city(userDetails.city);
    set_county(userDetails.country);
  }, [userDetails]);

  if (spinner) {
    return <CircularProgress />;
  } else {
    return (
      <Grid container direction="column" justify="center" alignItems="center">
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={2}
        >
          <Grid item>
            <TextField
              id="outlined-search"
              label="First name"
              type="text"
              variant="outlined"
              style={{ marginRight: "1%" }}
              defaultValue={userDetails.f_name}
            />
          </Grid>
          <Grid item>
            <TextField
              id="outlined-search"
              label="Last name"
              type="text"
              variant="outlined"
              defaultValue={userDetails.l_name}
            />
          </Grid>

          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={2}
          >
            <Grid item>
              <TextField
                id="outlined-search"
                label="Adress 1"
                type="text"
                variant="outlined"
                style={{ marginRight: "1%" }}
                defaultValue={userDetails.adressOne}
              />
            </Grid>
            <Grid item>
              <TextField
                id="outlined-search"
                label="Adress 2"
                type="text"
                variant="outlined"
                defaultValue={userDetails.adressTwo}
              />
            </Grid>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              spacing={2}
            >
              <Grid item>
                <TextField
                  id="outlined-search"
                  label="Postal code"
                  type="text"
                  variant="outlined"
                  style={{ marginRight: "1%" }}
                  defaultValue={userDetails.postal_code}
                />
              </Grid>
              <Grid item>
                <TextField
                  id="outlined-search"
                  label="City"
                  type="text"
                  variant="outlined"
                  defaultValue={userDetails.city}
                />
              </Grid>
            </Grid>
            <TextField
              style={{ marginTop: "8px" }}
              id="outlined-search"
              label="Country"
              type="text"
              variant="outlined"
              defaultValue={userDetails.country}
            />
          </Grid>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            style={{ marginTop: "2%" }}
          >
            <Grid item>
              <Typography style={{ color: "gray" }}>
                This is my adress
              </Typography>
            </Grid>
            <Grid item>
              <Checkbox
                checked={checked}
                onChange={handleChange}
                inputProps={{ "aria-label": "primary checkbox" }}
                label="Tomer"
              />
            </Grid>
          </Grid>
          <ErrorMessage
            error={
              "Please confirm your details. If the detils above are wrong, please edit and confirm."
            }
            summon={!checked}
          />
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            style={{ marginTop: "2%" }}
            spacing={3}
          >
            <Grid item>
              <Button className={classes.backBtn} onClick={() => handleBack()}>
                Back
              </Button>
            </Grid>
            <Grid item>
              <Button
                className={classes.proccedBtn}
                disabled={!checked}
                onClick={() => {
                  handleNext();
                }}
              >
                Procceed
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
};

export default ShipingDetails;
