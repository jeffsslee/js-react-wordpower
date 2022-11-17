import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container container-fluid">
          <Link className="navbar-brand" to={`/`}>
            Word Power
          </Link>
          <div className="navbar-nav me-auto">
            <Link className="nav-link" to={`/days`}>
              Day Lists
            </Link>
          </div>

          <div>
            <Link to={`/days/add`}>
              <button className="btn btn-sm btn-outline-success me-2">
                Add Day
              </button>
            </Link>
            <Link to={`/words/add`}>
              <button className="btn btn-sm btn-outline-primary">
                Add Word
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
