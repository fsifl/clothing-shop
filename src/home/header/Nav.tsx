import * as React from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";
import "./Nav.styles.scss";

export interface NavBarProps {}

const NavBar: React.SFC<NavBarProps> = () => {
  return (
    <div className="navlinks">
      <Router>
        <Link to="/" className="navlinks__link">
          SHOP
        </Link>
        <Link to="/" className="navlinks__link">
          CONTACT
        </Link>
        <Link to="/" className="navlinks__link">
          SIGNIN
        </Link>
      </Router>
    </div>
  );
};

export default NavBar;
