import React from "react";
import { useState } from "react";

const AdminDAashbord = () => {
  let [login, setLogin] = useState(false);

  function handleLogin() {
    setLogin = new Date().getDay();
  }
  return <div>{handleLogin}</div>;
};

export default AdminDAashbord;
