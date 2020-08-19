import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { Button } from "@material-ui/core";

//Comps
import ErrorMessage from "./Comps/ErrorMessage";
import Spinner from "./Comps/Spinner";
import { countryList } from "./Comps/CountryList";
//Router
import { Redirect } from "react-router";

import useRegisterValidation from "../../../hooks/useRegisterValidation";

const Register = () => {
  const classes = useStyles();
  const {
    lockButton,
    error,
    spinner,
    redirect,
    checkValidation,
    handleSumbit,
  } = useRegisterValidation();
  const [f_name, setF_name] = useState(null);
  const [l_name, setL_name] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [cPassword, setCPassword] = useState(null);
  const [adressOne, setAdressOne] = useState(null);
  const [adressTwo, setAdressTwo] = useState(null);
  const [postal_code, set_postal_code] = useState(null);
  const [city, setCity] = useState(null);
  const [country, setCountry] = useState(null);

  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSumbit({
            f_name,
            l_name,
            email,
            password,
            adressOne,
            adressTwo,
            postal_code,
            city,
            country,
          });
        }}
      >
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          className={classes.f_l_name}
        >
          <div style={{ width: "90%", marginBottom: "1%" }}>
            <TextField
              id="outlined-basic"
              label="First name"
              variant="outlined"
              style={{ marginRight: "3%" }}
              onChange={(e) => setF_name(e.target.value)}
              color="secondary"
              type="text"
            />
            <TextField
              id="outlined-basic"
              label="Last name"
              variant="outlined"
              color="secondary"
              type="text"
              onChange={(e) => setL_name(e.target.value)}
            />
          </div>
          <div style={{ width: "90%", marginBottom: "1%" }}>
            <TextField
              id="outlined-basic"
              label="E-mail adress"
              variant="outlined"
              style={{ marginRight: "3%", width: "60%" }}
              color="secondary"
              type={"email"}
              autoComplet={false}
              onChange={(e) => {
                checkValidation("email", e.target.value);
                setEmail(e.target.value);
              }}
            />
          </div>
          <div style={{ width: "90%", marginBottom: "1%" }}>
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              style={{ marginRight: "3%" }}
              color="secondary"
              type={"password"}
              onChange={(e) => {
                setPassword(e.target.value);
                checkValidation("password", e.target.value);
                checkValidation("check_confirm_password", {
                  password,
                  cPassword,
                });
              }}
            />
            <TextField
              id="outlined-basic"
              label="Confirm Password"
              variant="outlined"
              color="secondary"
              type={"password"}
              onChange={(e) => {
                setCPassword(e.target.value);
                checkValidation("check_confirm_password", {
                  password,
                  cPassword,
                });
              }}
            />
          </div>
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="center"
            style={{ width: "90%", marginBottom: "1%" }}
          >
            <TextField
              id="outlined-basic"
              label="Address Line 1"
              variant="outlined"
              color="secondary"
              type="text"
              onChange={(e) => setAdressOne(e.target.value)}
            />

            <TextField
              style={{ marginLeft: "3%" }}
              id="outlined-basic"
              label="Address Line 2"
              variant="outlined"
              color="secondary"
              type="text"
              onChange={(e) => setAdressTwo(e.target.value)}
            />
          </Grid>
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="center"
            style={{ width: "90%", marginBottom: "1%" }}
          >
            <TextField
              id="outlined-basic"
              label="Postal code"
              variant="outlined"
              color="secondary"
              type="number"
              onChange={(e) => set_postal_code(e.target.value)}
            />

            <TextField
              style={{ marginLeft: "3%" }}
              id="outlined-basic"
              label="City"
              variant="outlined"
              color="secondary"
              type="text"
              onChange={(e) => setCity(e.target.value)}
            />
          </Grid>
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="center"
            style={{ width: "90%", marginBottom: "1%" }}
          >
            <Autocomplete
              id="combo-box-demo"
              options={countryList}
              getOptionLabel={(option) => option.title}
              style={{ width: 300 }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Country"
                  variant="outlined"
                  onChange={(e) => setCountry(e.target.value)}
                />
              )}
            />
          </Grid>

          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="center"
            style={{ width: "90%", marginBottom: "1%" }}
          >
            {spinner ? <Spinner /> : null}
            <ErrorMessage error={error} />
          </Grid>
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="center"
            style={{ width: "90%", marginBottom: "1%" }}
          >
            <Button
              variant="contained"
              disabled={lockButton}
              type={"sumbit"}
              style={{
                backgroundColor: "#FFC107",

                color: "black",
              }}
            >
              Sign-up
            </Button>
          </Grid>
        </Grid>
      </form>

      {redirect ? <Redirect to="/" /> : null}
    </Grid>
  );
};
//styles
const useStyles = makeStyles((theme) => ({
  f_l_name: { marginTop: "3%", width: "55rem" },
}));

export default Register;
