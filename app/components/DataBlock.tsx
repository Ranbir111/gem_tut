"use client";
import React, { FormEventHandler, useState } from "react";
import { chat } from "../dataFetch/fetch";
import { motion } from "framer-motion";

function DataBlock() {
  const [data, setData] = useState<Array<{ you: string; gem: string }>>();
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const submitHandle: FormEventHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const res = await chat(input);
    if (data != null) {
      setData([...data, { you: input, gem: res }]);
    } else {
      setData([{ you: input, gem: res }]);
    }
    setInput("");
    setIsLoading(false);
    // Auto scroll to bottom
    setTimeout(() => {
      const chatLog = document.getElementById("chat-log");
      const bottomElement = chatLog?.lastElementChild;
      bottomElement?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 500);
  };

  function speak(text: string) {
    // Create a SpeechSynthesisUtterance
    const utterance = new SpeechSynthesisUtterance(text);

    // Select a voice
    const voices = speechSynthesis.getVoices();
    utterance.voice = voices[10]; // Choose a specific voice

    // Speak the text
    speechSynthesis.speak(utterance);
  }

  return (
    <>
      <div
        id="chat-log"
        className="xl:my-10 sm:my-0 xl:w-[60%] md:[70%] w-[100%] overflow-y-scroll flex-auto"
        style={{ scrollbarWidth: "none" }}
      >
        {data?.map((d, i) => {
          return (
            <>
              <motion.div
                initial={{
                  opacity: 0,
                  x: 500,
                }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.5,
                }}
                key={i}
                className="chat chat-end"
              >
                <div className="chat-header">
                  <h2 className="text-sm font-bold">You</h2>
                </div>
                <div className="chat-bubble">{d.you}</div>
              </motion.div>
              <motion.div
                initial={{
                  opacity: 0,
                  x: -500,
                }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.5,
                  duration: 0.5,
                }}
                className="chat chat-start"
              >
                <div className="chat-header">
                  <h2 className="text-sm font-bold">GEM</h2>
                </div>
                <div className="chat-bubble">{d.gem}</div>
                <button
                  onClick={() => speak(d.gem)}
                  className="chat-footer my-1 text-lg rounded-lg p-1 hover:bg-gray-800"
                >
                  🔊
                </button>
              </motion.div>
            </>
          );
        })}
      </div>
      <form
        onSubmit={submitHandle}
        className="flex flex-row xl:w-[60%] md:w-[70%] w-[100%] gap-2"
      >
        <motion.input
          whileFocus={{
            scale: 1.2,
            y: -70,
          }}
          className="input input-bordered w-full flex-grow"
          type="text"
          placeholder="Ask any question..."
          required
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <button className="btn btn-primary" disabled={isLoading}>
          {!isLoading && "Send"}
          {isLoading && (
            <span className="loading loading-dots loading-md"></span>
          )}
        </button>
      </form>
    </>
  );
}

export default DataBlock;
