import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import Input from "../Input";
import Message from "../Message";
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
  const [activeMembers, setActiveMembers] = useState([]);

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

    room.on("members", function (data) {
      const members = Object.values(data);
      setActiveMembers(members);
    });

    room.on("member_join", function (member) {
      setActiveMembers((prevMembers) => [...prevMembers, member]);
    });

    room.on("member_leave", ({ id }) => {
      setActiveMembers((prevMembers) =>
        prevMembers.filter((member) => member.id !== id)
      );
    });

    room.on("data", (data, member) => {
      setMsg((msg) => [
        ...msg,
        {
          member,
          text: data,
          time: new Date().toLocaleTimeString([], { hour12: false }),
        },
      ]);
    });

    return () => {
      if (drone) {
        drone.close();
      }
    };
  }, []);

  const getInput = (newMsg) => {
    drone.publish({
      room: "observable-" + roomName,
      message: newMsg,
    });
  };

  const logoutHandler = () => {
    if (drone) {
      drone.close();
    }
  };

  return (
    <div className="container">
      <div className="chat-box">
        <h1>Welcome to #{roomName}!</h1>

        <div className="box1">
          <div className="chat">
            <div className="messages">
              {msg.map((message, index) => (
                <Message message={message} id={index} currentUser={member} />
              ))}
            </div>
            <div className="input">
              <Input getInput={getInput} />
            </div>
          </div>
          <div className="members">
            <div className="members-list">
              <h3>Active members ({activeMembers.length}) </h3>
              <ol>
                {activeMembers.map((m) => (
                  <li key={m.id}>{m.clientData.username}</li>
                ))}
              </ol>
            </div>
            <Link to="/">
              <button className="btn_secondary" onClick={logoutHandler}>
                Logout
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatRoom;
