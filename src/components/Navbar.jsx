import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { useEffect, useState, useRef } from "react";

function Navbar() {
  const [authData, setAuthData] = useState({
    token: localStorage.getItem("authorization"),
    dbName: localStorage.getItem("dburl"),
    firstName: localStorage.getItem("firstName"),
  });

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // new for mobile
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const updateAuthData = () => {
      setAuthData({
        token: localStorage.getItem("authorization"),
        dburl: localStorage.getItem("dbName"),
        firstName: localStorage.getItem("firstName"),
      });
    };

    window.addEventListener("storage", updateAuthData);
    return () => window.removeEventListener("storage", updateAuthData);
  }, []);

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isLoggedIn = authData.token && authData.dburl && authData.firstName;
  const userInitial = authData.firstName?.charAt(0).toUpperCase();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/signin");
  };

  return (
    <nav className="navbar">
      <div className="logo">Faster🚀</div>

      {/* Menu toggle button for small screens */}
      <button
        className="menu-toggle"
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        ☰
      </button>

      {/* Nav links: toggle "open" class based on mobile menu state */}
      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        <Link to="/home" onClick={() => setMenuOpen(false)}>
          Home
        </Link>
        <Link to="/careers" onClick={() => setMenuOpen(false)}>
          Careers
        </Link>
        <Link to="/about" onClick={() => setMenuOpen(false)}>
          About
        </Link>

        {!isLoggedIn ? (
          <Link to="/signin" onClick={() => setMenuOpen(false)}>
            Sign In
          </Link>
        ) : (
          <div className="user-menu" ref={dropdownRef}>
            <div
              className="user-link"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <div className="user-badge">{userInitial}</div>
            </div>

            {dropdownOpen && (
              <div className="dropdown">
                <button onClick={() => navigate("/profile")}>My Profile</button>
                <button onClick={handleLogout}>Sign Out</button>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
