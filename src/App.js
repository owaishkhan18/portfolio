import React, { useState, useEffect, useRef } from "react";
import Navbar from "./component/navbar";
import Hero from "./component/hero";
import Projects from "./component/projects";
import Contact from "./component/contact";
import Foot from "./component/foot";
import Skills from "./component/Skills";
import { ArrowUp } from "lucide-react";
import heroImage from "./assest/images/1740144288403.jpg";

function App() {
  const heroRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const skillsRef = useRef(null);

  const [activeSection, setActiveSection] = useState("home");
  const [showScrollTop, setShowScrollTop] = useState(false); // State for "Back to Top"

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      if (scrollPosition > 500) {
        setShowScrollTop(true); // Show button after scrolling down
      } else {
        setShowScrollTop(false); // Hide button at the top
      }

      if (contactRef.current && scrollPosition >= contactRef.current.offsetTop) {
        setActiveSection("contact");
      } else if (skillsRef.current && scrollPosition >= skillsRef.current.offsetTop) {
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
      skills: skillsRef,
      projects: projectsRef,
      contact: contactRef,
    };

    if (sectionRefs[section] && sectionRefs[section].current) {
      sectionRefs[section].current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
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
      <section ref={skillsRef}>
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

      {/* Back to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 bg-emerald-500 text-black p-3 rounded-full shadow-lg hover:bg-emerald-400 transition-all duration-300"
        >
          <ArrowUp size={22} />
        </button>
      )}
    </div>
  );
}

export default App;
