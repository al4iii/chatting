import React from "react";
import { classNames } from "../utils/classNames";
import { auth } from "../firebase";

const Message = React.memo(({ message, scroll }) => {
  return (
    <div>
      <div
        className={classNames(
          "flex items-center shadow-xl m-4 py-2 px-3 rounded-tl-full rounded-tr-full",
          message.uid === auth.currentUser.uid
            ? "bg-[#2db1e8] text-white flex-row-reverse text-end float-right rounded-bl-full"
            : "bg-[#d0d0d0] text-black flex-row-reverse float-left rounded-br-full"
        )}
      >
        <p className={"mt-[-4rem] text-gray-600 text-xs"}>{message.name}</p>
        <p>{message.text}</p>
        {auth.currentUser.photoURL && (
          <img
            src={auth.currentUser.photoURL}
            alt="avatar"
            className={"w-6 h-6 rounded-full mr-3"}
          />
        )}
      </div>
      <span ref={scroll} />
    </div>
  );
});

export default Message;
