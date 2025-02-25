import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-8 bg-gray-900 text-white text-center shadow-lg">
      <div className="container mx-auto">
        <p className="text-lg font-semibold mb-4 text-emerald-400">Let's Connect!</p>

        {/* Social Links */}
        <div className="flex justify-center space-x-6">
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-gray-300 hover:text-emerald-400 transition-all duration-300 transform hover:scale-110"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/owaishkhan18"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-gray-300 hover:text-gray-400 transition-all duration-300 transform hover:scale-110"
          >
            <FaGithub />
          </a>
          <a
            href="mailto: owaishkhan18@gmail.com"
            className="text-3xl text-gray-300 hover:text-yellow-400 transition-all duration-300 transform hover:scale-110"
          >
            <FaEnvelope />
          </a>
        </div>

        {/* Copyright */}
        <p className="mt-6 text-sm text-gray-400">
          © {new Date().getFullYear()} <span className="text-emerald-400 font-semibold">Owais Khan</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
