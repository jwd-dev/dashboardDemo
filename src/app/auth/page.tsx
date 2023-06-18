"use client";
import React, { useState } from "react";

import { Button } from "@tremor/react";
import { auth } from "../../../firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

function AuthPage() {
  const [message, setMessage] = useState<null | string>(null);

  const provider = new GoogleAuthProvider();
  console.log("current", auth.currentUser);

  const login = () => {
    console.log("login clicked");
    signInWithPopup(auth, provider)
      .then((res) => {
        console.log("login success", res);
        if (res.user.email) {
          localStorage.setItem("voidUser", res.user.email);
        } else {
          throw new Error('Unable to set localstorage for key "user".');
        }
      })
      .catch((err) => {
        console.log("login failed", err);
      });
  };

  const logout = () => {
    const user = localStorage.getItem("voidUser");
    localStorage.removeItem("voidUser");
    setMessage(`Removed user ${user}.`);
  };

  return (
    <div>
      <Button onClick={login}>Log In</Button>
      <br />
      <Button onClick={logout}>Log Out</Button>
      <br />
      <p>{message}</p>
    </div>
  );
}

export default AuthPage;
