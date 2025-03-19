import React from "react";
import "./SkillsComponent.css";

const skillsData = {
  "Database Administrator": ["SQL", "Database Management", "Backup & Recovery"],
  "Hardware Engineer": ["Circuit Design", "Troubleshooting", "Embedded Systems"],
  "Application Support Engineer": ["Technical Support", "Problem Solving", "ITIL Knowledge"],
  "Cyber Security Specialist": ["Network Security", "Penetration Testing", "Incident Response"],
  "Networking Engineer": ["LAN/WAN Knowledge", "Cisco Devices", "Network Troubleshooting"],
  "Software Developer": ["Programming Languages", "Version Control", "Testing"],
  "API Specialist": ["RESTful APIs", "API Development", "Postman"],
  "Project Manager": ["Planning", "Budget Management", "Team Leadership"],
  "Information Security Specialist": ["Data Encryption", "Risk Assessment", "Cybersecurity Policies"],
  "Technical Writer": ["Technical Writing", "Documentation", "Attention to Detail"],
  "AI ML Specialist": ["Machine Learning", "Python", "Deep Learning"],
  "Software Tester": ["Test Automation", "Bug Tracking", "Regression Testing"],
  "Business Analyst": ["Requirement Gathering", "Data Analysis", "Stakeholder Communication"],
  "Customer Service Executive": ["Customer Support", "Problem Solving", "CRM Tools"],
  "Data Scientist": ["Data Analysis", "Python/R", "Machine Learning"],
  "Helpdesk Engineer": ["Technical Support", "Troubleshooting", "Customer Service"],
  "Graphics Designer": ["Adobe Suite", "Creativity", "UI/UX Design"],
};

const SkillsComponent = () => {
  return (
    <div className="skills-container">
      <h1 className="title">Required Skills for Careers</h1>
      <div className="jobs-list">
        {Object.entries(skillsData).map(([job, skills]) => (
          <div key={job} className="job-card">
            <h2>{job}</h2>
            <ul>
              {skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsComponent;
