import React from "react";
import Avatar from "../../Assets/Avatar";

export default function ChatMessage({ message }) {
  console.log(" no chat messages", message);
  return (
    <div className={`chat-message ${message.user === "gpt" && "chatgpt"}`}>
      <div className="chat-message-center">
        <div
          className={`avatar ${message.userchatgpt === "gpt" && "chatgpt"} `}
        >
          {message.user === "gpt" && <Avatar />}
        </div>
        <div className="message">{message.message}</div>
      </div>
    </div>
  );
}
