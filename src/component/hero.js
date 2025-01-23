import React from 'react';
import { motion } from 'framer-motion';

const Hero = ({ name, description, imageUrl ,bioDaTA }) => (
  <section
    id="hero"
    className="h-screen flex flex-col-reverse md:flex-row items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 md:px-20"
  >
    {/* Text Section */}
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className="text-center md:text-left md:w-1/2 space-y-6"
    >
      <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
        Hi, I'm <span className="text-yellow-300">{name}</span>
      </h1>
      <p className="text-lg md:text-xl">
        {description}
      </p>
      <div className="flex justify-center md:justify-start space-x-4">
        <a
          href="#projects"
          className="px-6 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-full shadow-lg hover:bg-yellow-500 transition-colors"
        >
          View Projects
        </a>
        {/* Updated "Download CV" Button */}
       
        <a
          href={bioDaTA} // Replace with the correct path to your CV file
          download="Owaish_Khan_CV"  // This will suggest the filename when downloading
          className="px-6 py-3 bg-transparent border-2 border-yellow-400 text-yellow-400 font-semibold rounded-full shadow-lg hover:bg-yellow-400 hover:text-gray-900 transition-colors"
        >
          Download CV
        </a>
      </div>
    </motion.div>

    {/* Image Section */}
    <motion.div
  initial={{ opacity: 0, x: 50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 1 }}
  className="md:w-1/2 flex justify-center items-center"
>
  <div className="relative w-64 h-64 md:w-80 md:h-80">
    {/* Image Container with Elegant Border */}
    <div className="rounded-xl border-4 border-gray-300 shadow-lg p-1 bg-gradient-to-tr from-gray-200 via-white to-gray-200">
      <img
        src={imageUrl}
        alt={`${name}'s Avatar`}
        className="rounded-lg w-full h-full object-cover"
      />
    </div>
  </div>
</motion.div>



  </section>
);

export default Hero;
