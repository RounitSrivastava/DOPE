import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import "./Contact.css";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: (delay) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut", delay },
  }),
};

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState(null);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        access_key: "5050a5e2-e9fc-46fd-9763-372efaa1188d",
        ...formData,
      }),
    });

    const result = await response.json();

    if (result.success) {
      setStatus("success");
      setFormData({ name: "", email: "", phone: "", message: "" });
      setTimeout(() => setStatus(null), 3000);
    } else {
      setStatus("error");
    }
  };

  return (
    <section className="contact-section" ref={ref}>
      {/* Title Animation */}
      <motion.h1
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        custom={0.2}
        variants={fadeInUp}
      >
        Start Your Project
      </motion.h1>

      {/* Subtitle Animation */}
      <motion.p
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        custom={0.4}
        variants={fadeInUp}
      >
        Let's turn your idea into reality
      </motion.p>

      {/* Contact Form */}
      <motion.form
        className="contact-form"
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        custom={0.6}
        variants={fadeInUp}
        onSubmit={handleSubmit}
      >
        <motion.input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
          custom={0.8}
          variants={fadeInUp}
        />
        <motion.input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
          custom={1.0}
          variants={fadeInUp}
        />
        {/* Mobile Number Section */}
        <motion.div
          className="contact-row"
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          custom={1.2}
          variants={fadeInUp}
        >
          <select>
            <option>+91 (IN)</option>
          </select>
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            required
          />
        </motion.div>
        <motion.textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          required
          custom={1.3}
          variants={fadeInUp}
        ></motion.textarea>
        <motion.button
          type="submit"
          custom={1.4}
          variants={fadeInUp}
        >
          Get Started →
        </motion.button>
        {/* Status Message */}
        {status === "success" && <p className="success-message">Message Sent Successfully!</p>}
        {status === "error" && <p className="error-message">Something went wrong. Try again!</p>}
      </motion.form>
    </section>
  );
};

export default Contact;
