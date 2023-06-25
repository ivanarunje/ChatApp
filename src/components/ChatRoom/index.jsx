import React from "react";
import { useLocation, Link } from "react-router-dom";

function ChatRoom() {
  const location = useLocation();
  const { loginInfo } = location.state;

  return (
    <div>
      <h1>Welcome to #{loginInfo.room}!</h1>
      <Link to="/">
        <button>Logout</button>
      </Link>
    </div>
  );
}

export default ChatRoom;
