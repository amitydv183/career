import React from "react";
import "./JobMarketTrends.css";

const trendsData = {
  "Trending Jobs": [
    "AI/ML Specialist",
    "Cybersecurity Expert",
    "Data Scientist",
    "Cloud Engineer",
    "Sustainability Analyst",
  ],
  "Skills in Demand": [
    "Machine Learning",
    "Data Analysis",
    "Cloud Computing",
    "Cybersecurity",
    "Project Management",
  ],
  "Workplace Trends": [
    "Remote Work Opportunities",
    "Hybrid Work Models",
    "Focus on Employee Well-being",
    "Increased Diversity & Inclusion",
    "Tech-Driven Collaboration Tools",
  ],
};

const JobMarketTrends = () => {
  return (
    <div className="trends-container">
      <h1 className="trends-title">Job Market Trends</h1>
      <div className="trends-sections">
        {Object.entries(trendsData).map(([category, items]) => (
          <div key={category} className="trend-card">
            <h2 className="trend-category">{category}</h2>
            <ul className="trend-items">
              {items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobMarketTrends;
