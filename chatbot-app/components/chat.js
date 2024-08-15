"use client";

import { useState } from "react";

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");

  const sendMessage = async () => {
    if (!userInput) return;

    const newMessages = [...messages, { sender: "You", text: userInput }];
    setMessages(newMessages);
    setUserInput("");

    const response = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: userInput }),
    });

    const data = await response.json();
    setMessages([...newMessages, { sender: "Bot", text: data.reply }]);
  };

  return (
    <div id="chat-container">
      <div id="messages">
        {messages.map((msg, index) => (
          <div key={index}>
            <strong>{msg.sender}:</strong> {msg.text}
          </div>
        ))}
      </div>
      <input
        type="text"
        id="user-input"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        placeholder="Type a message..."
      />
      <button id="send-button" onClick={sendMessage}>
        Send
      </button>
      <style jsx>{`
        #chat-container {
          width: 300px;
          padding: 20px;
          background-color: white;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        #messages {
          height: 200px;
          overflow-y: auto;
          margin-bottom: 10px;
          border: 1px solid #ddd;
          padding: 10px;
          background-color: #fafafa;
        }
        #user-input {
          width: calc(100% - 22px);
          padding: 10px;
          border: 1px solid #ddd;
        }
        #send-button {
          padding: 10px;
          background-color: #007bff;
          color: white;
          border: none;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}
