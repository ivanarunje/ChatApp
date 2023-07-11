import React from "react";

export default function Message({ message, index, currentUser }) {
  const { member, text, time } = message;
  const user = currentUser;
  console.log("member_id: " + member.id);
  console.log("user_id: " + user.id);
  const messageFromMe = member.id === user.id;
  const className = messageFromMe ? "message-me" : "message-other";
  return (
    <div className={className} key={index}>
      <div
        className="message-username"
        style={{ borderColor: member.clientData.color }}
      >
        {member.clientData.username}
      </div>
      <div className="message-content">
        <div className="time">{time}</div>
        <div>{text}</div>
      </div>
    </div>
  );
}
