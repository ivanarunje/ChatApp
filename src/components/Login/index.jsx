import React, { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");

  const submitFormHandler = (e) => {
    e.preventDefault();
    console.log("Username: ", username);
    console.log("Room: ", room);

    setUsername("");
    setRoom("");
  };
  return (
    /* Form with a username input field, room selection dropdown, and a login button.
     *** TODO: form validation and style*/
    <div>
      <h2>Login</h2>
      <form onSubmit={submitFormHandler}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            id="username"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Chat Room:</label>
          <select
            id="room"
            value={room}
            onChange={(e) => setRoom(e.target.value)}
          >
            <option value="">Select a room to join</option>
            <option value="DataGeeks">DataGeeks</option>
            <option value="WebDev">WebDev</option>
            <option value="BackendHeroes">BackendHeroes</option>
            <option value="MobileAppDev">MobileAppDev</option>
            <option value="UX/UI">UX/UI</option>
          </select>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
