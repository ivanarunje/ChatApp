import React from "react";
import { useLocation, Link } from "react-router-dom";
import "./style.scss";

function ChatRoom() {
  const location = useLocation();
  const { loginInfo } = location.state;

  return (
    <div className="container">
      <div className="chat-box">
        <div className="row">
          <h1>Welcome to #{loginInfo.room}!</h1>
          <Link to="/">
            <button className="btn">Logout</button>
          </Link>
        </div>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam
          quis eos impedit, nam, earum iste praesentium fugit qui modi quasi sit
          quia neque inventore expedita pariatur sed voluptatem in nostrum!
        </p>
      </div>
    </div>
  );
}

export default ChatRoom;
