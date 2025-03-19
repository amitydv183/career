import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Optional: Add a separate CSS file for styling

const Header = () => {
  return (
    <header className="header">
      <nav>
        <h1>Career Advisor</h1>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          
          <li><Link to="/skills">Skills</Link></li>
          <li><Link to="/job">Jobs</Link></li>
          <li><Link to="/career-advisor">Career Advisor</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
