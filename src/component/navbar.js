import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.remove('dark'); // Remove the dark mode class
    } else {
      document.documentElement.classList.add('dark'); // Add the dark mode class
    }
  };

  return (
    <nav
      className={`p-4 fixed w-full z-50 transition-all duration-300 ${
        darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
      } shadow-md`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-3xl font-bold">
          <a href="#hero" className="hover:text-blue-500 transition-colors">
            My<span className="text-blue-500">Portfolio</span>
          </a>
        </h1>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8 text-lg font-medium">
          <li>
            <a href="#hero" className="hover:text-blue-500 transition-colors">
              Home
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-blue-500 transition-colors">
              Projects
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-blue-500 transition-colors">
              About
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-500 transition-colors">
              Contact
            </a>
          </li>
        </ul>

        {/* Dark Mode Toggle */}
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 focus:outline-none transition-colors"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? '🌞' : '🌙'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
