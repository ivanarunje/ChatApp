import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.scss";
import { availableRooms, getRandomColor } from "../../utils";

function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [error, setError] = useState({});

  // Form submit function
  const submitFormHandler = (e) => {
    e.preventDefault();
    const errorMsg = validateData();

    if (!errorMsg.username && !errorMsg.room) {
      // go to chatRoom
      navigate("/chatRoom", {
        state: { name: username, roomName: room, color: getRandomColor() },
      });
      // reset values
      setUsername("");
      setRoom("");
      setError({});
    } else {
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
    <div className="login-container">
      <h2 className="heading">Login</h2>
      <form onSubmit={submitFormHandler}>
        <div>
          <input
            type="text"
            id="username"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <select
            id="room"
            value={room}
            onChange={(e) => setRoom(e.target.value)}
          >
            <option value="">Select a room to join</option>
            {availableRooms.map((room) => (
              <option key={room} value={room}>
                {room}
              </option>
            ))}
          </select>
        </div>
        {error.username ? (
          <p className="login-error">{error.username}</p>
        ) : null}
        {error.room ? <p className="login-error">{error.room}</p> : null}
        <button className="btn_primary" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
