import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Modern Icons

const projects = [
  {
    title: "Tutor App",
    description: "A Tutor app where students and teachers collaborate.",
    link: "#",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbVY91aKCI_s4PdzZobTJ9EQSYxJl0usKt1w&s",
  },
  {
    title: "Web Chat App",
    description: "A modern web chat app where users can chat in real-time.",
    link: "#",
    image:
      "https://res.cloudinary.com/smartsupp/image/upload/w_1440,h_1041,q_auto,f_auto,dpr_auto,c_fill/v1652255012/upload/Everything_starts_with_a_conversation_2x_oaocqd.png",
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
      scrollElement.addEventListener("scroll", updateScrollButtons);
      updateScrollButtons();
    }
    return () => {
      if (scrollElement) {
        scrollElement.removeEventListener("scroll", updateScrollButtons);
      }
    };
  }, []);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-900 to-black text-white px-6">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-10 text-emerald-400">My Projects</h2>

        <div className="relative max-w-5xl mx-auto">
          {/* Scroll Buttons */}
          {canScrollLeft && (
            <button
              onClick={scrollLeft}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-emerald-500 text-black p-3 rounded-full shadow-lg hover:bg-emerald-400 transition-all"
            >
              <ChevronLeft size={28} />
            </button>
          )}
          {canScrollRight && (
            <button
              onClick={scrollRight}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-emerald-500 text-black p-3 rounded-full shadow-lg hover:bg-emerald-400 transition-all"
            >
              <ChevronRight size={28} />
            </button>
          )}

          {/* Scrollable Cards */}
          <motion.div
            ref={scrollRef}
            className="overflow-x-scroll scrollbar-hide flex space-x-6 snap-x snap-mandatory"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="snap-center flex-shrink-0 w-80 p-5 rounded-xl shadow-lg bg-gray-800 transition-all transform hover:scale-105 border border-emerald-500"
                whileHover={{ scale: 1.05 }}
              >
                {/* Image */}
                <div className="relative w-full h-48 rounded-xl overflow-hidden shadow-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="mt-5 text-center">
                  <h3 className="text-2xl font-bold text-emerald-400">{project.title}</h3>
                  <p className="text-gray-300 mt-2">{project.description}</p>
                  <a
                    href={project.link}
                    className="inline-block mt-4 px-4 py-2 bg-emerald-500 text-black font-semibold rounded-lg hover:bg-emerald-400 transition-all"
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
