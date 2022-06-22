import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

const HomePrincipal = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link className="link" to="/example-01">
              Example 01
            </Link>
          </li>
          <li>
            <Link className="link" to="/example-02">
              Example 02
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default HomePrincipal;
