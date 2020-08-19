import React, { useState } from "react";

export default () => {
  const [isShow, setIsShow] = useState(false);
  const toggleShowModal = () => {
    isShow ? setIsShow(false) : setIsShow(true);
  };
  return [isShow, toggleShowModal];
};
