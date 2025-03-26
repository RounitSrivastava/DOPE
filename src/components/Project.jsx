import React, { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import "./Project.css";

// ✅ Import images
import image1 from "../assets/research.png";
import image2 from "../assets/flamingo.png";
import image3 from "../assets/ebike.png";
import image4 from "../assets/food.png";
import image5 from "../assets/school.png";
import image6 from "../assets/webshow.png";

const projects = [
  { id: 1, title: "Research.com", description: "Revolutionizing digital products.", image: image1 },
  { id: 2, title: "Travels.com", description: "Seamless travel booking and management platform.", image: image2 },
  { id: 3, title: "E-bike", description: "Enhancing e-mobility with cutting-edge innovation.", image: image3 },
  { id: 4, title: "The Bhukkad", description: "Next-level food for foodies.", image: image4 },
  { id: 5, title: "Education-Hub", description: "Empowering education through innovation and technology.", image: image5 },
  { id: 6, title: "Web Show", description: "Crafting immersive web experiences with an anime-inspired touch.", image: image6 },
];

const Project = () => {
  const [showAll, setShowAll] = useState(false);

  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <div className="project-section" ref={ref}>
      {/* ✅ Animated Heading */}
      <motion.h3 className="project-subtitle" initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0, transition: { duration: 0.7 } } : {}}>
        PORTFOLIOS
      </motion.h3>

      <motion.h2 className="project-title" initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.2 } } : {}}>
        <span className="white-text">Our</span> <span className="gradient-text">Completed Projects</span>
      </motion.h2>

      <motion.p className="project-description" initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.4 } } : {}}>
        Take a look at some of our latest projects, built with innovation and precision.
      </motion.p>

      {/* ✅ Projects Grid */}
      <motion.div className="projects-container" initial="hidden" animate={isInView ? "show" : "hidden"} variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.3 } } }}>
        {projects.slice(0, showAll ? projects.length : 3).map((project) => (
          <motion.div 
            key={project.id} 
            className="project-card" 
            variants={{ hidden: { opacity: 0, y: 50 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } }} 
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px rgba(0, 255, 255, 0.5)" }}
            whileTap={{ scale: 0.95 }}
          >
            {/* ✅ Project Image with Hover Overlay */}
            <div className="project-image-container">
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="overlay">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* ✅ "Show More Projects" Button (Appears when more than 3 projects exist) */}
      {!showAll && projects.length > 3 && (
        <motion.div className="more-projects-button-container" initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.8 } } : {}}>
          <button className="more-projects-button" onClick={() => setShowAll(true)}>Show More Projects →</button>
        </motion.div>
      )}
    </div>
  );
};

export default Project;
