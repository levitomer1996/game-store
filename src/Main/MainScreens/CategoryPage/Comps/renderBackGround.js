import React, { useState } from "react";

export default (category) => {
  switch (category) {
    case "PLAYSTATION5":
      return "https://i.imgur.com/Dq9dsjy.jpg";
    case "PLAYSTATION4":
      return "https://i.imgur.com/Dq9dsjy.jpg";
    case "XBOX_ONE":
      return "https://i.imgur.com/A65YyzM.jpg";
    case "PC":
      return "https://i.imgur.com/AmPRPgq.jpg";
  }
};
