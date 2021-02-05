import React, { useState } from "react";

import SignIn from "./SignIn.js";
import Main from "./Main.js";
import config from "../config.json";

export default () => {
  const [name, setName] = useState("");

  if (name === "" && config.signInEnabled === true) {
    return <SignIn setName={setName} />;
  } else {
    return <Main name={name} />;
  }
};
