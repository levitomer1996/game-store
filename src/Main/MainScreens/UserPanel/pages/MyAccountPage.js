import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import useGetUserDetails from "../../../../hooks/useGetUserDetails";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Typography } from "@material-ui/core";

export default function MyAccountPage() {
  const [getDetails, userDetails, spinner] = useGetUserDetails();

  useEffect(() => {
    getDetails();
  }, []);
  return (
    <div>
      {spinner ? (
        <Grid
          container
          direction="column"
          justify="flex-end"
          alignItems="center"
        >
          <CircularProgress />
        </Grid>
      ) : (
        <Grid
          container
          direction="column"
          justify="flex-start"
          alignItems="flex-start"
        >
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
            spacing={3}
          >
            <Grid item>
              <Typography variant="h5">
                First name:{" "}
                <strong style={{ color: "#ff2b2b" }}>
                  {userDetails.f_name}
                </strong>
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h5">
                Last name:{" "}
                <strong style={{ color: "#ff2b2b" }}>
                  {userDetails.l_name}
                </strong>
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="h5">
              E-mail:{" "}
              <strong style={{ color: "#ff2b2b" }}>{userDetails.email}</strong>
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h5">
              Adress 1:{" "}
              <strong style={{ color: "#ff2b2b" }}>
                {userDetails.adressOne}
              </strong>
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h5">
              Adress 2:{" "}
              <strong style={{ color: "#ff2b2b" }}>
                {userDetails.adressTwo}
              </strong>
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h5">
              Postal code:{" "}
              <strong style={{ color: "#ff2b2b" }}>
                {userDetails.postal_code}
              </strong>
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h5">
              City:{" "}
              <strong style={{ color: "#ff2b2b" }}>{userDetails.city}</strong>
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h5">
              Country:{" "}
              <strong style={{ color: "#ff2b2b" }}>
                {userDetails.country}
              </strong>
            </Typography>
          </Grid>
        </Grid>
      )}
    </div>
  );
}
