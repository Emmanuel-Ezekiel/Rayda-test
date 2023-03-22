import React from "react";
import { FiBell } from "react-icons/fi";
import "../../styles/nav.scss";
const Nav = () => {
  return (
    <header>
      <nav>
        <div className="title">
          <h1>Welcome </h1>
          <p>Your current sales auction and activity.</p>
        </div>
        <div className="notification">
          <FiBell width={24} height={24} />

          <div className="badge">
            <p>2</p>
          </div>
        </div>
      </nav>

      <div className="line"></div>
    </header>
  );
};

export default Nav;
