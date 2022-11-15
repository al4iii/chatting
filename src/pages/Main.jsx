import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import Navbar from "../components/Navbar";
import Chat from "../components/Chat";

const Main = React.memo(() => {
  const [user] = useAuthState(auth);

  return (
    <div className={"max-w-[728px] mx-auto text-center"}>
      <section className={"flex flex-col h-[90vh] bg-gray-400 mt-10 shadow-xl border relative"}>
        <Navbar />
        {user && <Chat />}
      </section>
    </div>
  );
});

export default Main;
