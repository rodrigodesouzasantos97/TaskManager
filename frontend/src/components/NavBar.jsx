import { Link } from "react-router-dom";

import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to="/">
        <i className="fa-solid fa-house"></i>
      </Link>
    </nav>
  );
};

export default NavBar;
