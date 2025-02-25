import React, { useState, useEffect } from "react";
import { Home, FolderOpen, BadgeCheck, Mail } from "lucide-react";

const Navbar = ({ activeSection, onNavClick }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY <= 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", icon: <Home size={22} />, label: "Home" },
    { id: "skills", icon: <BadgeCheck size={22} />, label: "Skills" },
    { id: "projects", icon: <FolderOpen size={22} />, label: "Projects" },
    { id: "contact", icon: <Mail size={22} />, label: "Contact" },
  ];

  const handleNavClick = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    onNavClick(id); // Update active section
  };

  return (
    <nav
      className={`fixed top-5 left-1/2 transform -translate-x-1/2 bg-gray-900 bg-opacity-80 backdrop-blur-lg p-3 px-4 rounded-full shadow-lg flex space-x-4 z-50 border border-gray-700 transition-all duration-500 ${
        isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90 pointer-events-none"
      }`}
    >
      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={() => handleNavClick(item.id)}
          className={`relative flex items-center px-3 py-2 rounded-full transition-all group 
            ${
              activeSection === item.id
                ? "bg-emerald-500 text-gray-900 shadow-lg scale-110"
                : "bg-gray-800 text-white hover:bg-emerald-400 hover:text-black"
            }`}
        >
          {item.icon}
          {/* Show text on medium (md) screens and larger */}
          <span className="hidden md:inline text-sm font-medium ml-2">{item.label}</span>
        </button>
      ))}
    </nav>
  );
};

export default Navbar;
