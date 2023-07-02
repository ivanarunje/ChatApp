import React, { useState } from "react";

function Input({ getInput }) {
  const [input, setInput] = useState("");

  const changeHandler = (event) => {
    setInput(event.target.value);
  };

  const InputHandler = (event) => {
    /* TODO: Check for empty value, add some style to form fields*/
    event.preventDefault();
    setInput(input);
    getInput(input);
    setInput("");
  };

  return (
    <div className="input-container">
      <form onSubmit={InputHandler}>
        <input type="text" value={input} onChange={changeHandler} />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Input;
