import React, { useState, useContext, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "@material-ui/core/Button";

//hooks
import usePayment from "./usePayment";
//Context
import CheckOutContext from "./CheckOutPage.Context";
import CartContext from "../../../Contex/CartContext";

//Router
import { Redirect } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: { width: "60%" },
  submitBtn: {
    backgroundColor: "turquoise",
    fontWeight: "bold",
    color: "rgb(58, 63, 64)",
  },
}));

const yearList = [2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030];
const monthList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const PaymentStep = () => {
  const classes = useStyles();
  const { handleBack, setCreditCard, formState } = useContext(CheckOutContext);
  const { cartItems } = useContext(CartContext);
  const [yearExp, setYearExp] = useState(null);
  const [monthExp, setMonthExp] = useState(null);
  const [name_On_Card, set_name_On_Card] = useState(null);
  const [cvc, setCvc] = useState(null);
  const [number, set_number] = useState(null);
  const [submitPayment, redirectToIndex] = usePayment();

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

  return (
    <Grid container direction="column" justify="center" alignItems="center">
      {redirectToIndex ? <Redirect to="/" /> : null}
      <Grid item style={{ width: "30%" }}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setCreditCard({
              name_On_Card,
              cvc,
              number,
              exp: `${yearExp}-${monthExp < 10 ? `0${monthExp}` : monthExp}`,
            });

            submitPayment({
              creditCard: formState,
              products: cartItems,
              total_payment: total_Price,
            });
          }}
        >
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            spacing={1}
          >
            <Grid item style={{ width: "100%" }}>
              <TextField
                id="outlined-textarea"
                label="Name on card"
                placeholder="Name on card"
                multiline
                variant="outlined"
                style={{ width: "100%" }}
                onChange={(e) => {
                  set_name_On_Card(e.target.value);
                }}
              />
            </Grid>
            <Grid item style={{ width: "100%" }}>
              <TextField
                id="outlined-textarea"
                label="Card number"
                placeholder="Card number"
                multiline
                variant="outlined"
                style={{ width: "100%" }}
                onChange={(e) => set_number(e.target.value)}
              />
              <Grid item style={{ width: "100%", marginTop: "10px" }}>
                <Grid
                  container
                  direction="row"
                  justify="flex-start"
                  alignItems="center"
                >
                  <Grid item sm={4} xs={12}>
                    <FormControl variant="outlined" style={{ width: "100%" }}>
                      <InputLabel htmlFor="outlined-age-native-simple">
                        Year
                      </InputLabel>
                      <Select
                        native
                        onChange={(e) => setYearExp(e.target.value)}
                        label="Year"
                        inputProps={{
                          name: "Year",
                          id: "outlined-age-native-simple",
                        }}
                      >
                        <option aria-label="None" value="" />
                        {yearList.map((num) => {
                          return <option value={num}>{num}</option>;
                        })}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item sm={4} xs={12}>
                    <FormControl variant="outlined" style={{ width: "100%" }}>
                      <InputLabel htmlFor="outlined-age-native-simple">
                        Month
                      </InputLabel>
                      <Select
                        native
                        onChange={(e) => setMonthExp(e.target.value)}
                        label="Month"
                        inputProps={{
                          name: "Month",
                          id: "outlined-age-native-simple",
                        }}
                      >
                        <option aria-label="None" value="" />
                        {monthList.map((num) => {
                          return <option value={num}>{num}</option>;
                        })}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item sm={4} xs={12}>
                    <TextField
                      id="outlined-number"
                      label="CVC"
                      placeholder="CVC"
                      type="number"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      variant="outlined"
                      onChange={(e) => setCvc(e.target.value)}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
              spacing={1}
              style={{ marginTop: "2%" }}
            >
              <Grid item>
                <Button
                  variant="contained"
                  color="primary"
                  style={{ backgroundColor: "#ffc10799" }}
                  className={classes.submitBtn}
                  onClick={() => handleBack()}
                >
                  Back
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.submitBtn}
                  type="submit"
                >
                  Submit Order
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
};
export default PaymentStep;
