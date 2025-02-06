import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-10 bg-gray-800 text-white text-center">
      <div className="container mx-auto">
        <p className="mb-4 text-lg font-medium">Connect with me:</p>

        {/* Social Links */}
        <div className="flex justify-center space-x-6">
          <a
            href="https://www.linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-blue-400 transition-colors"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-gray-400 transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="mailto:your-email@example.com"
            className="text-2xl hover:text-yellow-400 transition-colors"
          >
            <FaEnvelope />
          </a>
        </div>

        {/* Copyright */}
        <p className="mt-6 text-sm text-gray-400">
          © {new Date().getFullYear()} Owaish Khan. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
