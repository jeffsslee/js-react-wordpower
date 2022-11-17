import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container my-3">
      <h4>Welcome to Word Power App</h4>

      <div className="card mt-4">
        <div className="card-header">Powered by React</div>
        <div className="card-body">
          <h5 className="card-title">With the following tech</h5>
          <ul>
            <li className="card-text">React for view</li>
            <li className="card-text">
              JSON Server for Simple Backend API service
            </li>
          </ul>
          <Link to={`/days`} className="btn btn-primary">
            Show Day Lists
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
