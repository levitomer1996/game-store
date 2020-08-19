import React from "react";
//Hooks
import { makeStyles } from "@material-ui/core/styles";
//Material
import { Grid } from "@material-ui/core";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const MobileHeader = () => {
  const classes = useStyles();
  return (
    <header className={classes.root}>
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="center"
        style={{ backgroundColor: "rgb(58, 63, 64)", width: "100%" }}
      >
        <Grid item>
          <IconButton>
            <InstagramIcon fontSize="large" className={classes.icons} />
          </IconButton>
          <IconButton>
            <FacebookIcon fontSize="large" className={classes.icons} />
          </IconButton>
          <IconButton>
            <TwitterIcon fontSize="large" className={classes.icons} />
          </IconButton>
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="center"
        style={{ backgroundColor: "rgb(58, 63, 64)", width: "100%" }}
      >
        <IconButton>
          <MenuIcon fontSize="large" className={classes.icons} />
        </IconButton>
      </Grid>
    </header>
  );
};

const useStyles = makeStyles((theme) => ({
  root: { [theme.breakpoints.up("md")]: { display: "none" } },
  firstRow: { backgroundColor: "rgb(58, 63, 64)" },
  icons: { color: "#FFC107" },
}));

export default MobileHeader;
