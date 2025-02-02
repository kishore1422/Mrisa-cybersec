import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Team.css"; // Custom styles for additional styling
import { motion } from "framer-motion";
import { FaLinkedin, FaInstagram } from "react-icons/fa";

const teamHeads = [
  { name: "John Doe", role: "Founder & CEO", image: "https://randomuser.me/api/portraits/men/1.jpg", linkedin: "#", instagram: "#", description: "Leading the team with a passion for cybersecurity." },
  { name: "Jane Smith", role: "Co-Founder & CTO", image: "https://randomuser.me/api/portraits/women/1.jpg", linkedin: "#", instagram: "#", description: "Building innovative security solutions." },
];

const coreMembers = [
  { name: "Alice Johnson", role: "Core Member", image: "https://randomuser.me/api/portraits/women/2.jpg", linkedin: "#", instagram: "#", description: "Specialist in penetration testing." },
  { name: "Bob Williams", role: "Core Member", image: "https://randomuser.me/api/portraits/men/2.jpg", linkedin: "#", instagram: "#", description: "Expert in network security." },
];

const volunteers = [
  { name: "Fiona Blue", role: "Volunteer", image: "https://randomuser.me/api/portraits/women/4.jpg", linkedin: "#", instagram: "#", description: "Passionate about ethical hacking." },
  { name: "George Black", role: "Volunteer", image: "https://randomuser.me/api/portraits/men/5.jpg", linkedin: "#", instagram: "#", description: "Aspiring cybersecurity analyst." },
];

const Team = () => {
  const renderTeamSection = (title, members) => (
    <>
      <h3 className="team-section-title text-center">{title}</h3>
      <div className="row justify-content-center">
        {members.map((member, index) => (
          <div key={index} className="col-lg-3 col-md-4 col-sm-6 col-12 team-member">
            <motion.div className="card team-card small-card" whileHover={{ scale: 1.05 }}>
              <img src={member.image} className="card-img-top small-img" alt={member.name} />
              <div className="card-body">
                <h5 className="card-title">{member.name}</h5>
                <p className="card-subtitle">{member.role}</p>
                <p className="card-text">{member.description}</p>
                <div className="social-links">
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                  <a href={member.instagram} target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </>
  );

  return (
    <div className="container team-container text-center">
      <div className="title-container">
        <motion.h3 className="meet-title" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>Meet</motion.h3>
        <motion.h2 className="team-title" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>The Team</motion.h2>
      </div>
      {renderTeamSection("Heads", teamHeads)}
      {renderTeamSection("Core Members", coreMembers)}
      {renderTeamSection("Volunteers", volunteers)}
    </div>
  );
};

export default Team;
