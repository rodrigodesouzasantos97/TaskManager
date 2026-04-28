import { Link } from "react-router-dom";

import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to="/">
        <i class="fa-solid fa-house"></i>
      </Link>
      <Link to="/board">
        <i class="fa-solid fa-clipboard"></i>
      </Link>
    </nav>
  );
};

export default NavBar;
