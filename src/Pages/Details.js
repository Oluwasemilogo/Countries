import React from "react";
import { Link } from "react-router-dom";

function Details() {
  return (
    <div>
      <h1>Hello world</h1>
      <Link to="/" className="return-link">
        <div className="return-btn">
          <button>Back</button>
        </div>
      </Link>
    </div>
  );
}

export default Details;
