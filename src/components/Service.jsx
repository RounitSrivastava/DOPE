import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaCode, FaMobileAlt, FaBrain, FaSearch, FaChartBar, FaLayerGroup, FaVideoSlash, FaViadeo, FaViadeoSquare, FaPhotoVideo, FaRegFileVideo } from "react-icons/fa";
import "./Service.css";

const services = [
  { icon: <FaCode />, title: "Web Development", desc: "Creating dynamic and responsive websites & web applications with the latest technology" },
  { icon: <FaMobileAlt />, title: "Mobile Apps", desc: "Building intuitive and high-performance mobile apps for iOS and Android" },
  { icon: <FaLayerGroup />, title: "Full Stack Development", desc: "ESeamless full-stack solutions, bridging frontend elegance with backend power" },
  { icon: <FaChartBar />, title: "Admin Dashboard", desc: "Customized admin dashboards for efficient monitoring and control" },
  { icon: <FaVideoSlash />, title: "Video Editing", desc: "Professional video editing services for seamless and high-quality content creation." },
  { icon: <FaSearch />, title: "SEO Optimization", desc: "Boosting visibility and driving organic traffic with smart SEO strategie" },
  
];

// ✅ Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Cards animate one after another
    },
  },
};

// ✅ Card animation
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

// ✅ Heading & paragraph animation
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const Service = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" }); // ✅ Triggers animation when entering viewport

  return (
    <section className="services-section" ref={ref}>
      {/* ✅ Heading animation (happens every time it enters view) */}
      <motion.h1
        className="services-heading"
        variants={fadeInUp}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
      >
        Our <span className="highlight">Services</span>
      </motion.h1>

      {/* ✅ Paragraph animation (also triggers every time) */}
      <motion.p
        className="services-description"
        variants={fadeInUp}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
      >
       Revolutionizing modern business with digital innovation.
      </motion.p>

      {/* ✅ Cards animate in sequence every time they enter view */}
      <motion.div
        className="services-container"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "show" : "hidden"} // Triggers again on re-entry
      >
        {services.map((service, index) => (
          <motion.div
            className="service-card"
            key={index}
            variants={cardVariants}
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px rgba(0, 255, 255, 0.5)" }}
          >
            <div className="icon-wrapper">{service.icon}</div>
            <h2 className="service-heading">{service.title}</h2>
            <p>{service.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Service;
