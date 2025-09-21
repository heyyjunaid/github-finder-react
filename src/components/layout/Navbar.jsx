import { FaGithub, FaMoon, FaSun } from "react-icons/fa";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";

const Navbar = ({ title }) => {
  const [theme, setTheme] = useState("night");

  // Load saved theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "night";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "night" ? "bumblebee" : "night"; // correct toggle
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <nav className="navbar bg-neutral text-neutral-content shadow-lg mb-12">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo + Title */}
        <div className="flex items-center gap-2">
          <FaGithub className="text-3xl" />
          <Link to="/" className="text-lg font-bold">
            {title}
          </Link>
        </div>

        {/* Nav Links + Theme Switch */}
        <div className="flex items-center gap-2">
          <Link to="/" className="btn btn-ghost btn-md">
            Home
          </Link>
          <Link to="/about" className="btn btn-ghost btn-md">
            About
          </Link>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="btn btn-ghost btn-md ml-2"
            title="Toggle Theme"
          >
            {theme === "night" ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  title: PropTypes.string,
};

Navbar.defaultProps = {
  title: "GitHub Finder",
};

export default Navbar;
