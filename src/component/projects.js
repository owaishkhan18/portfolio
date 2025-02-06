import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title:'Tutor App',
    description:'Tutor app where student and techers collabrate each otheres',
    link:"#",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbVY91aKCI_s4PdzZobTJ9EQSYxJl0usKt1w&s"
  },

  {
    title: 'Web chat app',
    description: 'A modern web chat app where user can interact with friends',
    link: '#',
    image: 'https://res.cloudinary.com/smartsupp/image/upload/w_1440,h_1041,q_auto,f_auto,dpr_auto,c_fill/v1652255012/upload/Everything_starts_with_a_conversation_2x_oaocqd.png', // Example image URL
  },
  
];

const Projects = () => {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateScrollButtons = () => {
    const scrollElement = scrollRef.current;
    if (scrollElement) {
      setCanScrollLeft(scrollElement.scrollLeft > 0);
      setCanScrollRight(
        scrollElement.scrollLeft < scrollElement.scrollWidth - scrollElement.clientWidth
      );
    }
  };

  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (scrollElement) {
      scrollElement.addEventListener('scroll', updateScrollButtons);
      updateScrollButtons();
    }
    return () => {
      if (scrollElement) {
        scrollElement.removeEventListener('scroll', updateScrollButtons);
      }
    };
  }, []);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <section id="projects" className="py-20 bg-gray-100 px-4 md:px-10">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">Projects</h2>
        <div className="relative">
          {/* Scroll Buttons */}
          {canScrollLeft && (
            <button
              onClick={scrollLeft}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-700"
            >
              &#8592;
            </button>
          )}
          {canScrollRight && (
            <button
              onClick={scrollRight}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-700"
            >
              &#8594;
            </button>
          )}

          {/* Scrollable Container */}
          <motion.div
            ref={scrollRef}
            className="overflow-x-scroll scrollbar-hide flex flex-col md:flex-row justify-center space-y-6 md:space-y-0 md:space-x-6"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 w-full md:w-72 p-4 border rounded-lg shadow-lg bg-white"
                whileHover={{ scale: 1.05 }}
              >
                {/* Image Section */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 object-cover rounded-t-lg"
                />
                {/* Text Section */}
                <div className="p-4">
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  <p className="mt-2">{project.description}</p>
                  <a
                    href={project.link}
                    className="text-blue-500 hover:underline mt-4 block"
                  >
                    View Project
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

