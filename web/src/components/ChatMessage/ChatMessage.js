import React from "react";
import Avatar from "../../Assets/Avatar";

export default function ChatMessage({ message }) {
  return (
    <div className={`chat-message ${message.user === "gpt" && "chatgpt"}`}>
      <div className="chat-message-center">
        <div
          className={`avatar ${message.userchatgpt === "gpt" && "chatgpt"} `}
        >
          <Avatar user={message.user} />
        </div>
        <div className="message">{message.message}</div>
      </div>
    </div>
  );
}
