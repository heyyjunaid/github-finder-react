import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="flex justify-center px-4">
      <div className="max-w-xl w-full p-10 rounded-2xl bg-white/10 backdrop-blur-lg shadow-2xl border border-white/20 text-center">
        {/* Logo + Title */}
        <div className="flex justify-center items-center gap-3 mb-6">
          <FaGithub className="text-6xl text-white drop-shadow-lg" />
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
            GitHub Finder
          </h1>
        </div>

        {/* Description */}
        <p className="mb-6 text-lg font-light text-gray-300">
          🚀 A modern React app to search GitHub profiles and explore user
          details including repositories, followers, and more.
        </p>

        {/* Version */}
        <div className="mb-6">
          <span className="inline-block px-3 py-1 text-sm rounded-full bg-purple-500/20 text-purple-300 border border-purple-400/30">
            Version 2.1.1
          </span>
        </div>

        {/* Author */}
        <p className="text-md text-gray-400 mb-8">
          Made with ❤️ by{" "}
          <a
            href="https://www.linkedin.com/in/juned-ahmad-179608169/"
            target="_blank"
            rel="noreferrer"
            className="text-pink-400 hover:text-pink-300 transition-colors font-medium"
          >
            Juned Ahmad
          </a>
        </p>

        {/* Back button */}
        <Link
          to="/"
          className="btn btn-outline btn-lg border-pink-500 text-pink-400 hover:bg-pink-500 hover:text-white transition-all"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
};

export default About;
