import React, { useState } from "react";
import { FaAlignJustify } from "react-icons/fa";

function NavBar() {
  const [state, setState] = useState(true);
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar__container">
          <ul className="navbar__left">
            <div className="navbar__left-logo">
              <img src="./image/3.png" alt="..." />
            </div>
          </ul>
          {state ? (
            <ul className="navbar__right">
              <li>
                <a href="/#">Start</a>
              </li>
              <li>
                <a href="#aktywność">Aktywność</a>
              </li>
              <li>
                <a href="#o_sobie">O&nbsp;sobie</a>
              </li>
              <li>
                <a href="#pasja">Pasja</a>
              </li>
              <li>
                <a href="#hobby">Hobby</a>
              </li>
              <li>
                <a href="#kontakt">Kontakt</a>
              </li>
            </ul>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="toggle" onClick={() => setState(!state)}>
        <FaAlignJustify />
      </div>
    </nav>
  );
}

export default NavBar;
