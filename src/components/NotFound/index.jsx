import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="NotFound">
      <h1>Upsss! Page not found!</h1>
      <p>
        Please return to <Link to="/">homepage!</Link>
      </p>
    </div>
  );
}
