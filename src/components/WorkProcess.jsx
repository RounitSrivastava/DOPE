import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./WorkProcess.css";
import { jsx } from "react/jsx-runtime";

const steps = [
  { title: "Empathize" },
  { title: "Define" },
  { title: "Ideate" },
  { title: "Prototype" },
  { title: "Qualitative test" },
  { title: "Quantitative test" },
];

// ✅ Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.3 },
  },
};

const stepVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const WorkProcess = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" }); // Triggers animation when entering viewport

  return (
    <div className="work-process" ref={ref}>
      {/* ✅ Heading animations */}
      <motion.h3
        className="subtitle"
        variants={fadeInUp}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
      >
        ABOUT US
      </motion.h3>

      <motion.h2
        className="title"
        variants={fadeInUp}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
      >
        Our <span className="highlight">work process</span>
      </motion.h2>

      <motion.p
        className="description"
        variants={fadeInUp}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
      >
       We follow a structured process in web development and graphic design to create seamless, high-quality solutions. 
      </motion.p>

      {/* ✅ Steps Animation */}
      <motion.div
        className="process-container"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
      >
        {steps.map((step, index) => (
          <motion.div key={index} className="step-container" variants={stepVariants}>
            {index !== 0 && <div className="arrow">&#10145;</div>}
            <div className={`diamond ${index % 2 !== 0 ? "dashed" : ""}`}>
              <span className="step-title">{step.title}</span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default WorkProcess;