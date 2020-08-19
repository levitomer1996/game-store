import React, { useState, UseContext, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
//Hooks
import renderUserpanelPage from "./renderUserpanelPage";
//Context
import AuthContext from "../../../Contex/AuthContext";

const UserPanel = () => {
  const menuList = ["My Account", "Orders", "Sign-out"];
  const [page, setPage] = useState("My Account");
  const { authState } = useContext(AuthContext);

  if (!authState.isLogged) {
    return (
      <div>
        <h1>Please Login</h1>
      </div>
    );
  }

  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <Grid item xs={12} sm={2}>
        <List>
          {menuList.map((item) => {
            return (
              <ListItem button key={item} onClick={() => setPage(item)}>
                {item}
              </ListItem>
            );
          })}
        </List>
      </Grid>
      <Grid item xs={12} sm={10}>
        {renderUserpanelPage(page)}
      </Grid>
    </Grid>
  );
};

export default UserPanel;
