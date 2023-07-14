import React, { useState } from "react";
import "./style.scss";

function Input({ getInput }) {
  const [input, setInput] = useState("");

  const changeHandler = (event) => {
    setInput(event.target.value);
  };

  const InputHandler = (event) => {
    /* TODO: add some style to form fields*/
    event.preventDefault();
    setInput(input);
    getInput(input);
    setInput("");
  };

  return (
    <form onSubmit={InputHandler}>
      <input
        type="text"
        placeholder="Enter your message"
        value={input}
        onChange={changeHandler}
      />
      <button className="send" disabled={input.trim() === ""}>
        Send
      </button>
    </form>
  );
}

export default Input;
