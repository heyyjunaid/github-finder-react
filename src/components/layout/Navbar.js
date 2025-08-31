import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Navbar = ({ title }) => {
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

        {/* Nav Links */}
        <div className="flex gap-2">
          <Link to="/" className="btn btn-ghost btn-md">
            Home
          </Link>
          <Link to="/about" className="btn btn-ghost btn-md">
            About
          </Link>
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
