import React from "react";
import { motion } from "framer-motion";
import { Code, Database, FileCode, PaintBucket, Globe, Layers } from "lucide-react";

// Floating Particles
const floatingParticles = Array.from({ length: 15 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  delay: Math.random() * 2,
  size: Math.random() * 6 + 4, // 4px to 10px
}));

// Skill Categories
const skillCategories = {
  Frontend: [
    { name: "HTML", level: 95, icon: <FileCode size={32} />, color: "#F16529" },
    { name: "CSS", level: 90, icon: <PaintBucket size={32} />, color: "#2965F1" },
    { name: "JavaScript", level: 90, icon: <Code size={32} />, color: "#F7DF1E" },
    { name: "React.js", level: 85, icon: <Code size={32} />, color: "#61DAFB" },
  ],
  Backend: [
    { name: "Node.js", level: 80, icon: <Database size={32} />, color: "#68A063" },
    { name: "GraphQL", level: 70, icon: <Globe size={32} />, color: "#E535AB" },
    { name: "WordPress", level: 75, icon: <Layers size={32} />, color: "#21759B" },
    { name: "PHP", level: 80, icon: <FileCode size={32} />, color: "#777BB3" },
  ],
  Languages: [
    { name: "JavaScript", level: 90, icon: <Code size={32} />, color: "#F7DF1E" },
    { name: "TypeScript", level: 80, icon: <Code size={32} />, color: "#007ACC" },
    { name: "Python", level: 75, icon: <FileCode size={32} />, color: "#FFD43B" },
    { name: "C++", level: 70, icon: <FileCode size={32} />, color: "#00599C" },
  ],
};

const Skills = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-[#0a0a0a] text-white px-6 py-16 overflow-hidden">
      {/* Background Floating Particles */}
      {floatingParticles.map((dot) => (
        <motion.div
          key={dot.id}
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: [0, -15, 0] }}
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

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-extrabold text-emerald-400 mb-10"
      >
        My Skills 🚀
      </motion.h2>

      {/* Skill Categories */}
      <div className="w-full max-w-6xl space-y-12">
        {Object.entries(skillCategories).map(([category, skills]) => (
          <div key={category}>
            <motion.h3
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl font-bold text-emerald-300 mb-6"
            >
              {category}
            </motion.h3>

            {/* Skill Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  whileHover={{ scale: 1.1, rotate: 1 }}
                  className="relative bg-black/30 border border-gray-700 backdrop-blur-lg p-6 rounded-3xl shadow-lg 
                              flex flex-col items-center space-y-4 hover:shadow-xl transition-all duration-300"
                >
                  {/* Floating Glow */}
                  <div
                    className="absolute inset-0 w-full h-full rounded-3xl"
                    style={{
                      background: `radial-gradient(circle, ${skill.color}33, transparent)`,
                      filter: "blur(40px)",
                    }}
                  ></div>

                  {/* Icon */}
                  <div className="text-white">{skill.icon}</div>

                  {/* Skill Name */}
                  <h3 className="text-lg font-semibold">{skill.name}</h3>

                  {/* Circular Progress Bar */}
                  <div className="relative w-24 h-24">
                    <svg className="w-full h-full">
                      <circle
                        cx="50%"
                        cy="50%"
                        r="40"
                        stroke="rgba(255,255,255,0.2)"
                        strokeWidth="6"
                        fill="transparent"
                      />
                      <motion.circle
                        cx="50%"
                        cy="50%"
                        r="40"
                        stroke={skill.color}
                        strokeWidth="6"
                        fill="transparent"
                        strokeLinecap="round"
                        initial={{ strokeDasharray: "0, 251.2" }}
                        animate={{ strokeDasharray: `${(251.2 * skill.level) / 100}, 251.2` }}
                        transition={{ duration: 1.5, delay: 0.2 }}
                      />
                    </svg>
                    <span className="absolute inset-0 flex items-center justify-center text-xl font-bold">
                      {skill.level}%
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
