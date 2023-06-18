"use client";
import React from "react";

import { Button } from "@tremor/react";
import { auth } from "../../../firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

function AuthPage() {
  const provider = new GoogleAuthProvider();
  console.log("current", auth.currentUser);

  const login = () => {
    console.log("login clicked");
    signInWithPopup(auth, provider)
      .then((res) => {
        console.log("login success", res);
      })
      .catch((err) => {
        console.log("login failed", err);
      });
  };

  return (
    <div>
      <Button onClick={login}>Log In</Button>
    </div>
  );
}

export default AuthPage;
