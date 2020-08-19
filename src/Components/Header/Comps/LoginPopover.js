import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import PersonIcon from "@material-ui/icons/Person";
import IconButton from "@material-ui/core/IconButton";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import FormControl from "@material-ui/core/FormControl";
import InputAdornment from "@material-ui/core/InputAdornment";
import Input from "@material-ui/core/Input";
import Visibility from "@material-ui/icons/Visibility";
import InputLabel from "@material-ui/core/InputLabel";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
//Contex
import useLogin from "../../../hooks/useLogin";

const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
  },
}));

export default function LoginPopover() {
  const [Signin, isConnectedResolver, spinner] = useLogin();
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <label style={{ color: "#FFC107" }}>Login</label>
      <IconButton onClick={handleClick}>
        <PersonIcon fontSize="large" style={{ color: "#FFC107" }} />
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            Signin({ email, password });
          }}
        >
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
            style={{ padding: 5 }}
          >
            {spinner ? <CircularProgress /> : null}
            <Grid item>
              <Typography>
                Login to your personal account with your e-mail and your
                password.
              </Typography>
            </Grid>
            <Grid
              container
              direction="row"
              justify="flex-start"
              alignItems="flex-start"
            >
              <TextField
                label="Email"
                style={{ marginBottom: "2%", marginRight: "5%" }}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />

              <TextField
                id="standard-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </Grid>
            <Button
              variant="contained"
              style={{
                backgroundColor: "#FFC107",
                color: "white",
                fontWeight: "bold",
                marginRight: "4%",
              }}
              type={"submit"}
            >
              Login
            </Button>
            <a href={"register"}>Don't have an account yet? Click on me.</a>
          </Grid>
        </form>
      </Popover>
    </div>
  );
}
