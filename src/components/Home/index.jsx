import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div className="HomeDescription">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
          corporis veniam unde doloribus nihil at commodi. Voluptatum unde
          dolore, quasi quaerat, laboriosam assumenda vero sit perferendis,
          repudiandae doloribus esse incidunt?
        </p>
      </div>
      <Link to="/login">
        <button>Login</button>
      </Link>
    </div>
  );
}

export default Home;
