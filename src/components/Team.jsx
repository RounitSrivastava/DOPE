import React from "react";
import "./Team.css";
import webDeveloperImage from "../assets/rounit.png";  
import uiUxImage from "../assets/par.jpg";  

const teamMembers = [
  {
    name: "d",
    description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    image:  webDeveloperImage, // Replace with actual image path
  },
  {
    name: "c",
    description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    image: uiUxImage, // Replace with actual image path
  },
];

const Team = () => {
  return (
    <div className="team-section">
      <div className="team-content">
        <h3 className="team-heading">TEAMS</h3>
        <h2 className="team-title">
          Our <span className="highlight">team members</span>
        </h2>
        <p className="team-subtext">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
          Velit officia consequat duis enim velit mollit.
        </p>
      </div>

      <div className="team-members">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-card">
            <div className="team-image">
              <img src={member.image} alt={member.name} />
            </div>
            <h3 className="team-name">{member.name}</h3>
            <p className="team-description">{member.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
