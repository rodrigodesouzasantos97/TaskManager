import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav clasName="navbar">
      <Link to="/">Home</Link>
      <Link to="/board">Board</Link>
    </nav>
  );
};

export default NavBar;
