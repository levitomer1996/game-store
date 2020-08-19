import React, { useState, useEffect } from "react";

import Alert from "@material-ui/lab/Alert";
import Collapse from "@material-ui/core/Collapse";

export default function ErrorMessage({ error }) {
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    console.log(error);
    if (error === null) {
      setIsShow(false);
    } else {
      setIsShow(true);
    }
  }, [error]);
  return (
    <Collapse direction="up" in={isShow} mountOnEnter unmountOnExit>
      <Alert severity="error">{error}</Alert>
    </Collapse>
  );
}
