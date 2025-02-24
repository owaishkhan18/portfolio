import React from "react";
import { motion } from "framer-motion";
import { Instagram, Github, Linkedin } from "lucide-react";

const floatingParticles = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  delay: Math.random() * 2,
  size: Math.random() * 6 + 4, // 4px to 10px
}));

const Hero = ({ name, description, imageUrl, stats, socialLinks }) => {
  return (
    <section className="relative min-h-screen flex flex-col md:flex-row items-center justify-center bg-black text-white px-6 sm:px-12 md:px-20 pt-40 md:pt-48 pb-20 overflow-hidden">
      {/* Background Floating Particles */}
      {floatingParticles.map((dot) => (
        <motion.div
          key={dot.id}
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: [0, -15, 0] }} // Floating effect
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse",
            delay: dot.delay,
          }}
          className="absolute bg-emerald-400 rounded-full opacity-20"
          style={{
            width: `${dot.size}px`,
            height: `${dot.size}px`,
            top: `${dot.y}%`,
            left: `${dot.x}%`,
          }}
        />
      ))}

      {/* Left - Profile Card with Glow Effect */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative bg-black text-white rounded-2xl shadow-lg p-8 w-full max-w-xs sm:max-w-sm md:max-w-md 
                   border border-gray-700 backdrop-blur-lg bg-opacity-50 z-10 hover:scale-105 transition-transform duration-300"
      >
        {/* Outer Glow Effect */}
        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-green-500 to-emerald-500 opacity-25 blur-3xl rounded-2xl z-[-1]"></div>

        {/* Image */}
        <div className="relative w-full h-52 sm:h-64 md:h-72 bg-gradient-to-b from-gray-900 to-gray-700 rounded-2xl flex justify-center items-center overflow-hidden shadow-lg">
          <img
            src={imageUrl}
            alt={`${name}'s Avatar`}
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>

        {/* Name & Bio */}
        <h2 className="text-xl sm:text-2xl font-bold text-center mt-5 text-emerald-400">{name}</h2>
        <p className="text-sm sm:text-base text-gray-300 text-center mt-3 px-3">
          Passionate web developer building next-gen digital experiences.
        </p>

        {/* Social Links */}
        <div className="flex justify-center space-x-5 mt-5">
          <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-500 transition">
            <Instagram size={28} />
          </a>
          <a href={https://github.com/owaishkhan18} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
            <Github size={28} />
          </a>
          <a href={https://www.linkedin.com/in/owaish-khan-352a02230/} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-500 transition">
            <Linkedin size={28} />
          </a>
        </div>
      </motion.div>

      {/* Right - Hero Content */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left px-6 sm:px-8 md:px-16 mt-12 md:mt-0"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
          <span className="text-white">WEBSITE</span>{" "}
          <span className="text-emerald-400">DEVELOPER</span>
        </h1>
        <p className="text-base sm:text-lg text-gray-300 mt-4 sm:mt-5">{description}</p>

        {/* Call to Action */}
        <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-5 mt-8">
          <a
            href="#projects"
            className="w-full sm:w-auto px-6 py-3 bg-emerald-500 text-gray-900 font-semibold rounded-full shadow-lg hover:bg-emerald-600 transition-transform transform hover:scale-105 text-center"
          >
            View Projects
          </a>
          <a
            href="/resume.pdf"
            download="Owais_Khan_CV"
            className="w-full sm:w-auto px-6 py-3 border-2 border-emerald-500 text-emerald-400 font-semibold rounded-full shadow-lg hover:bg-emerald-500 hover:text-gray-900 transition-transform transform hover:scale-105 text-center"
          >
            Download CV
          </a>
        </div>

        {/* Stats Section */}
        {/* <div className="flex flex-wrap justify-center md:justify-start space-x-6 mt-10">
          {stats.map((stat, index) => (
            <div key={index} className="text-center flex flex-col items-center space-y-2">
              <h3 className="text-3xl sm:text-4xl font-bold text-emerald-400">{stat.value}</h3>
              <p className="text-gray-300 text-sm sm:text-base">{stat.label}</p>
            </div>
          ))}
        </div> */}
      </motion.div>
    </section>
  );
};

export default Hero;
