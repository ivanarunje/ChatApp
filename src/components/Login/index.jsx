import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [error, setError] = useState({});
  const navigate = useNavigate();

  // Form submit function
  const submitFormHandler = (e) => {
    e.preventDefault();
    console.log("Username: ", username);
    console.log("Room: ", room);

    const errorMsg = validateData();
    console.log("msgErrors: ", errorMsg.username);
    console.log("msgErrors: ", errorMsg.room);
    console.log("msgErrors: ", errorMsg.length);

    if (!errorMsg.username && !errorMsg.room) {
      // go to chatRoom component
      console.log("msgErrors: OK ");
      navigate("/chatRoom");
      // reset values
      setUsername("");
      setRoom("");
      setError({});
    } else {
      console.log("msgErrors: NIJE OK ");
      setError(errorMsg);
    }
  };

  // Form validation function
  const validateData = () => {
    const error = {};

    if (username.trim() === "") {
      error.username = "Username is required";
    } else if (username.length < 2) {
      error.username = "Username must be at least 2 characters long";
    }

    if (room === "") {
      error.room = "Please select a room";
    }
    return error;
  };

  return (
    /* Form with a username input field, room selection dropdown, and a login button.
     *** TODO: style*/
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
        {error.username ? <p className="error">{error.username}</p> : null}
        {error.room ? <p className="error">{error.room}</p> : null}
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
