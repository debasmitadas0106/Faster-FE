import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Faster🚀</div>
      <div className="nav-links">
        <Link to="/home">Home</Link>
        <Link to="/careers">Careers</Link>
        <Link to="/signin">Sign In</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
}

export default Navbar;
