import React from "react";

const About = () => {
  return (
    <div>
      <h1 className="text-6xl mb-4">GitHub Finder</h1>
      <p className="mb-4 text-2xl font-light">
        A React app to search GitHub profiles and see profile details.
      </p>
      <p className="text-lg text-gray-400">
        Version <span className="text-white">1.1.0</span>
      </p>
      <p className="text-lg text-gray-400">
        Made By :
        <a
          className="text-white"
          href="https://www.linkedin.com/in/juned-ahmad-179608169/"
          target="_blank"
        >
          Juned Ahmad
        </a>
      </p>
    </div>
  );
};

export default About;
