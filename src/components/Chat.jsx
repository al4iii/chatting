import React from "react";
import { query, collection, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import Message from "./Message";
import SendMessage from "./SendMessage";

const Chat = React.memo(() => {
  const [messages, setMessages] = React.useState([]);
  const scroll = React.useRef(null);

  React.useEffect(() => {
    const subscribeQuery = query(
      collection(db, "messages"),
      orderBy("timestamp")
    );

    const subscribe = onSnapshot(subscribeQuery, (querySnapshot) => {
      let messages = [];
      querySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages);
    });

    return () => subscribe();
  }, []);

  return (
    <>
      <main className={"flex flex-col p-[10px] h-full overflow-auto"}>
        {messages &&
          messages.map((message) => (
            <Message key={message.id} message={message} scroll={scroll} />
          ))}
      </main>
      <SendMessage scroll={scroll} />
    </>
  );
});

export default Chat;
