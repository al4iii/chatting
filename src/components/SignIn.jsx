import React from "react";
import GoogleButton from "react-google-button";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import { auth } from "../firebase";

const SignIn = React.memo(() => {
    return (
    <div className={"flex justify-center"}>
      <GoogleButton
        onClick={() => {
          const provider = new GoogleAuthProvider();
          signInWithRedirect(auth, provider);
        }}
      />
    </div>
  );
});

export default SignIn;
