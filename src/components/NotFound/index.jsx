import React from "react";
import { Link } from "react-router-dom";
import not_found from "../../assets/404.png";
import "./style.scss";

export default function NotFound() {
  return (
    <div className="container">
      <div className="notFound-container">
        <h1>Page not found!</h1>
        <p>
          We are sorry but the page you are looking for does not exist. Please
          return to{" "}
          <Link className="link_notFound" to="/">
            homepage
          </Link>
          !
        </p>
        <div className="image-container">
          <img src={not_found} alt="404 not found" />
        </div>
      </div>
    </div>
  );
}
