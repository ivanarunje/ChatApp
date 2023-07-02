import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

function Home() {
  return (
    <div className="container">
      <div className="row">
        <h2 className="heading">Welcome to the Chat Application!</h2>
        <div className="button-container">
          <Link to="/login">
            <button className="btn">Join room</button>
          </Link>
        </div>
      </div>
      <p className="welcome-text">
        Connect with like-minded individuals and enhance your IT skills through
        collaborative discussions and knowledge sharing. Join various
        specialized rooms tailored to different IT domains and expand your
        expertise. Engage in conversations about frontend development, backend
        development, UX/UI, databases, and more.{" "}
        <p>
          The application allows you to communicate in real-time with fellow IT
          enthusiasts. Stay updated with the latest trends, exchange ideas, seek
          advice, and build professional connections within the IT community. To
          get started, simply choose a room that aligns with your interests and
          dive into engaging discussions.
        </p>
      </p>
      <ul className="room-list">
        <li className="item">Databases</li>
        <li className="item">Backend Development</li>
        <li className="item">Frontend Development</li>
        <li className="item">UX/UI</li>
        <li className="item">Mobile development</li>
      </ul>
    </div>
  );
}

export default Home;
