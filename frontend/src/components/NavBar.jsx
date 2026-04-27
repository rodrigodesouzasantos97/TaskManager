import { Link } from "react-router-dom";

import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/board">Board</Link>
    </nav>
  );
};

export default NavBar;
