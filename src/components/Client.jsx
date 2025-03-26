import React, { useState, useEffect } from "react";
import "./Client.css";

const testimonials = [
  {
    name: "Rounit Srivastava",
    position: "Co-founder, DopeDropout",
    review: "Service is good and I highly recommend it.",
  },
  {
    name: "Aman Bardiyar",
    position: "Creative Director, NewsBharat",
    review: "Amazing experience! The service was top-notch, and I got great results.",
  },
  {
    name: "Rohan Lenka",
    position: "Founder, UX Fertilisersj",
    review: "Highly satisfied! The team went above and beyond to deliver great service.",
  },
];

const Client = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="testimonial-section" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <div className="testimonial-container" style={{ textAlign: "center", maxWidth: "600px" }}>
        <div className="testimonial-content">
          <h3>“{testimonials[index].review}”</h3>
          <p>Their expertise and dedication ensured a smooth and exceptional experience.</p>
          <p className="client-name">— {testimonials[index].name}, {testimonials[index].position}</p>
        </div>
      </div>
      <div className="dots" style={{ marginTop: "20px" }}>
        {testimonials.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === index ? "active" : ""}`}
            onClick={() => setIndex(i)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Client;
