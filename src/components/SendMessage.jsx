import React from "react";
import { auth, db } from "../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

const SendMessage = React.memo(({ scroll }) => {
  const [text, setText] = React.useState("");

  const sendMessage = async () => {
    await addDoc(collection(db, "messages"), {
      text: text,
      name: auth.currentUser.displayName,
      uid: auth.currentUser.uid,
      timestamp: serverTimestamp(),
    })
      .then(() => {
        setText("");
        scroll.current.scrollIntoView({ behavior: "smooth" });
      })
      .catch(() => alert("Please send a message again"));
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        text ? sendMessage() : alert("Please enter a valid message");
      }}
      className={"h-14 w-full max-w-[728px] flex text-xl sticky bottom-0"}
    >
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        className={"w-full text-xl p-3 bg-gray-100 text-black outline-none border-none"}
        type="text"
        placeholder="Enter your message"
      />
      <button className={"w-[25%] bg-[#d0d0d0] ml-1"} type="submit">
        Send
      </button>
    </form>
  );
});

export default SendMessage;
