"use client";
import { useState } from "react";
export default function ChatAi() {
  // Recibir query del input y mandarlo a /api/chat-ai/route
  const [question, setQuestion] = useState("");

  const handleInput = (e) => {
    setQuestion(e.target.value);
  };

  const handleSubmit = async () => {
    const response = await fetch("/api/chat-ai/route", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(question),
    });
    console.log(response);
    const data = await response.json();
    console.log(data);
  };

  return (
    <>
      {/* Chat content */}
      <div className="flex flex-col">
        <div className="h-[70vh]">
          {/* AI Bubble*/}
          <div className="chat chat-start">
            <div className="chat-bubble">
              It's over Anakin,
              <br />I have the high ground.
            </div>
          </div>
          {/* my Bubble */}
          <div className="chat chat-end">
            <div className="chat-bubble">
              You underestimate my power! {question}{" "}
            </div>
          </div>
        </div>

        {/* Input */}
        <div className="flex flex-row justify-center items-center bottom-0 my-20">
          <input
            type="text"
            placeholder="Ask me something"
            className="input input-bordered input-accent w-full"
            onChange={handleInput}
          />
          <button className="btn btn-success mx-2" onClick={handleSubmit}>
            Ask something
          </button>
        </div>
      </div>
    </>
  );
}
