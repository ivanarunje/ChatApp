import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import Input from "../Input";
import "./style.scss";

function ChatRoom() {
  const location = useLocation();
  const { name, roomName, color } = location.state;
  const [msg, setMsg] = useState([]);
  const [member, setMember] = useState({
    username: name,
    color: color,
  });
  const [drone, setDrone] = useState();

  useEffect(() => {
    const drone = new window.Scaledrone(process.env.REACT_APP_CHANNEL_ID, {
      data: member,
    });
    setDrone(drone);

    drone.on("open", (error) => {
      if (error) {
        return console.error(error);
      }
      console.log(
        "User " + member.username + " has successfully connected to Scaledrone"
      );

      const updatedMember = { ...member };
      updatedMember.id = drone.clientId;
      setMember(updatedMember);
    });
    const room = drone.subscribe("observable-" + roomName);
    room.on("open", (error) => {
      if (error) {
        return console.error(error);
      }
      console.log("Successfully joined room: " + roomName);
    });

    room.on("data", (data, member) => {
      setMsg((msg) => [...msg, { member, text: data }]);
    });
  }, []);

  const getInput = (newMsg) => {
    drone.publish({
      room: "observable-" + roomName,
      message: newMsg,
    });
    console.log(msg);
    console.log(member);
  };

  return (
    <div className="container">
      <div className="chat-box">
        <div className="row">
          <h1>Welcome to #{roomName}!</h1>
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
            {msg.map((message, index) => (
              <div className="message-row" key={index}>
                <div className="username" style={{color: message.member.clientData.color}}>
                  {message.member.clientData.username}
                </div>
                <div className="message-text">{message.text}</div>
              </div>
            ))}
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
