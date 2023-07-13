import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

function Home() {
  return (
    <div className="container">
      <h1>Welcome to the Chat Application!</h1>
      <div className="description">
        <p>
          Connect with like-minded individuals and enhance your IT skills
          through collaborative discussions and knowledge sharing. Join various
          specialized rooms tailored to different IT domains and expand your
          expertise. Engage in conversations about frontend development, backend
          development, UX/UI, databases, and more.
        </p>
        <p>
          The application allows you to communicate in real-time with fellow IT
          enthusiasts. Stay updated with the latest trends, exchange ideas, seek
          advice, and build professional connections within the IT community. To
          get started, simply choose a room that aligns with your interests and
          dive into engaging discussions.
        </p>
      </div>
      <div className="room-heading">
        <h3>List of available rooms</h3>
      </div>
      <div className="room-list">
        <ul>
          <li className="room">Databases</li>
          <li className="room">Backend Development</li>
          <li className="room">Frontend Development</li>
          <li className="room">UX/UI</li>
          <li className="room">Mobile development</li>
          <Link to="/login">
            <button className="btn_secondary"> JOIN </button>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Home;
