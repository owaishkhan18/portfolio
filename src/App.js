import React, { useState, useEffect, useRef } from "react";
import Navbar from "./component/navbar";
import Hero from "./component/hero";
import Projects from "./component/projects";
import Contact from "./component/contact";
import Foot from "./component/foot";
import Cv from "./assest/images/owiahkhanresume.pdf";
import heroImage from "./assest/images/1740144288403.jpg";
import Skills from "./component/Skills";

function App() {
  const heroRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const skillsRef = useRef(null); // ✅ Fixed: Lowercase "skillsRef"

  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      if (contactRef.current && scrollPosition >= contactRef.current.offsetTop) {
        setActiveSection("contact");
      } else if (skillsRef.current && scrollPosition >= skillsRef.current.offsetTop) { // ✅ Fixed: Used skillsRef
        setActiveSection("skills");
      } else if (projectsRef.current && scrollPosition >= projectsRef.current.offsetTop) {
        setActiveSection("projects");
      } else {
        setActiveSection("home");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (section) => {
    const sectionRefs = {
      home: heroRef,
      skills: skillsRef, // ✅ Fixed: Lowercase "skills"
      projects: projectsRef,
      contact: contactRef,
    };

    if (sectionRefs[section] && sectionRefs[section].current) {
      sectionRefs[section].current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="bg-black min-h-screen text-white">
      {/* Navbar */}
      <Navbar activeSection={activeSection} onNavClick={scrollToSection} />

      {/* Hero Section */}
      <section ref={heroRef}>
        <Hero
          name="Owaish Khan"
          title="Web Developer"
          description="Passionate full-stack developer with a focus on creating beautiful, responsive frontend designs. Skilled in building dynamic web
          applications.
          Eager to collaborate on impactful projects and solve real-world problems, blending creativity and functionality to deliver innovative solutions."
          imageUrl={heroImage}
          stats={[
            { value: "+2", label: "Years of Experience" },
            { value: "+3", label: "Projects Completed" },
          ]}
          socialLinks={{
            instagram: "https://instagram.com/your-profile",
            github: "https://github.com/your-profile",
            linkedin: "https://linkedin.com/in/your-profile",
          }}
        />
      </section>

      {/* Skills Section */}
      <section ref={skillsRef}> {/* ✅ Fixed: Assigned ref to section */}
        <Skills />
      </section>

      {/* Projects Section */}
      <section ref={projectsRef}>
        <Projects />
      </section>

      {/* Contact Section */}
      <section ref={contactRef}>
        <Contact />
      </section>

      {/* Footer */}
      <Foot />
    </div>
  );
}

export default App;
