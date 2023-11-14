import { useState } from "react";
import { sendRequest } from "./api/api";
import ChatMessage from "./components/ChatMessage/ChatMessage";
import SideMenu from "./components/SideMenu/SideMenu";
import "./styles/App.css";
import "./styles/reset.css";

function App() {
  const [userInput, setUserInput] = useState("");
  const [chatlog, setChatLog] = useState([
    {
      user: "gpt",
      message: "how can i help you today?",
    },
  ]);

  async function handleSubmit(event) {
    event.preventDefault();

    const response = await sendRequest({ prompt: userInput });

    console.log("response", response);

    const formattedResponse = response.data
      .split("\n")
      .map((line) => <p>{line}</p>);

    setChatLog([
      ...chatlog,
      {
        user: "me",
        message: `${userInput}`,
      },
      {
        user: "gpt",
        message: formattedResponse,
      },
    ]);

    setUserInput("");
  }

  return (
    <div className="App">
      <SideMenu />

      <section className="chatbox">
        <div className="chat-log">
          {chatlog.map((message, index) => (
            <ChatMessage key={`${message} + ${index}`} message={message} />
          ))}
        </div>
        <div className="chat-input-container">
          <form onSubmit={handleSubmit}>
            <input
              rows="1"
              className="chat-input"
              value={userInput}
              onChange={(event) => setUserInput(event.target.value)}
            />
          </form>
        </div>
      </section>
    </div>
  );
}

export default App;
