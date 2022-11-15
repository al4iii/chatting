import React from "react";
import { auth } from "../firebase";

const LogOut = React.memo(() => {
  return (
    <button
      onClick={() => auth.signOut()}
      className={"bg-gray-200 px-4 py-2 hover:bg-gray-100"}
    >
      Logout
    </button>
  );
});

export default LogOut;
