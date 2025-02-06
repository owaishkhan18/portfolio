import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // Sidebar state

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  };

  return (
    <>
      {/* Navbar */}
      <nav
        className={`p-4 fixed w-full z-50 transition-all duration-300 flex justify-between items-center ${
          darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
        } shadow-md`}
      >
        <div className="container mx-auto flex justify-between items-center">
          {/* Sidebar Menu Button (Only for Mobile) */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 focus:outline-none md:hidden"
            aria-label="Toggle Menu"
          >
            ☰
          </button>

          {/* Logo */}
          <h1 className="text-3xl font-bold">
            <a href="#hero" className="hover:text-blue-500 transition-colors">
              My<span className="text-blue-500">Portfolio</span>
            </a>
          </h1>

          {/* Desktop Navigation (Visible on md and larger screens) */}
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

          {/* Dark Mode Toggle (Inside Navbar) */}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 focus:outline-none transition-colors"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? '🌞' : '🌙'}
          </button>
        </div>
      </nav>

      {/* Sidebar Menu (Only for Mobile) */}
      <motion.div
        initial={{ x: '-100%' }}
        animate={{ x: menuOpen ? '0%' : '-100%' }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 h-full w-64 bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow-md z-50 p-5 md:hidden"
      >
        {/* Close Button */}
        <button
          onClick={() => setMenuOpen(false)}
          className="text-2xl absolute top-4 right-4 focus:outline-none"
        >
          ❌
        </button>

        {/* Sidebar Navigation */}
        <ul className="mt-10 space-y-6 text-lg font-medium">
          <li>
            <a href="#hero" className="hover:text-blue-500 transition-colors" onClick={() => setMenuOpen(false)}>
              Home
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-blue-500 transition-colors" onClick={() => setMenuOpen(false)}>
              Projects
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-blue-500 transition-colors" onClick={() => setMenuOpen(false)}>
              About
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-500 transition-colors" onClick={() => setMenuOpen(false)}>
              Contact
            </a>
          </li>
        </ul>
      </motion.div>
    </>
  );
};

export default Navbar;
