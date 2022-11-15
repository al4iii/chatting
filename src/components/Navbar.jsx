import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import LogOut from "./LogOut";
import SignIn from "./SignIn";

const Navbar = React.memo(() => {
  const [user] = useAuthState(auth);

  return (
    <div className={"bg-gray-800 h-20 flex justify-between items-center p-4 sticky top-0"}>
      <h1 className={"text-white text-3xl"}>Chat</h1>
      {user ? <LogOut /> : <SignIn />}
    </div>
  );
});

export default Navbar;
