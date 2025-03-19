import React, { useState } from 'react';
import axios from 'axios';
import './Form.css';
const SkillForm = ({ onPrediction }) => {
  const [formData, setFormData] = useState({
    "Database Fundamentals": "",
    "Computer Architecture": "",
    "Distributed Computing Systems": "",
    "Cyber Security": "",
    "Networking": "",
    "Software Development": "",
    "Programming Skills": "",
    "Project Management": "",
    "Computer Forensics Fundamentals": "",
    "Technical Communication": "",
    "AI ML": "",
    "Software Engineering": "",
    "Business Analysis": "",
    "Communication skills": "",
    "Data Science": "",
    "Troubleshooting skills": "",
    "Graphics Designing": ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:5000/predict', formData);
      onPrediction(response.data); // Pass the response to the parent component
    } catch (error) {
      console.error("Error making API call:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {Object.keys(formData).map((key) => (
        <div key={key}>
          <label>{key}</label>
          <input
            type="number"
            name={key}
            value={formData[key]}
            onChange={handleChange}
          />
        </div>
      ))}
      <button type="submit">Get Career Prediction</button>
    </form>
  );
};

export default SkillForm;
