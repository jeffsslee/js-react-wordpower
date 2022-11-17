import React from "react";
import { Link } from "react-router-dom";

function Page404() {
  return (
    <div className="container my-3">
      <h4>Lost Way!</h4>
      <div className="mt-3">
        <p>You've lost your way!</p>
        <Link to={`/`}>
          <button className="btn btn-outline-secondary">Back to home</button>
        </Link>
      </div>
    </div>
  );
}

export default Page404;
