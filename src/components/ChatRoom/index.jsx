import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import Input from "../Input";
import "./style.scss";

function ChatRoom() {
  const location = useLocation();
  const { loginInfo } = location.state;
  const [msg, setMsg] = useState([]);

  const getInput = (newMsg) => {
    const receivedMsg = [...msg];
    receivedMsg.push(newMsg);
    setMsg(receivedMsg);
  };

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
        <div className="chat">
          <div className="messages">
            <ul>
              {msg.map((message, index) => (
                <li key={index}>{message}</li>
              ))}
            </ul>
          </div>
          <div className="input">
            <Input getInput={getInput} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatRoom;
