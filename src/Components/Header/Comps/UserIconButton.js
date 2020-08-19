import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import PersonIcon from "@material-ui/icons/Person";
import IconButton from "@material-ui/core/IconButton";

//Context
import AuthContext from "../../../Contex/AuthContext";

export default function UserIconButton({ redirect }) {
  const { authState } = useContext(AuthContext);

  return (
    <div>
      <label
        style={{ color: "#FFC107" }}
      >{`${authState.user.f_name} ${authState.user.l_name}`}</label>
      <IconButton onClick={() => redirect()}>
        <PersonIcon fontSize="large" style={{ color: "#FFC107" }} />
      </IconButton>
    </div>
  );
}
