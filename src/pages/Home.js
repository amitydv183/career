import React from 'react';
import './Home.css';
const Home = () => {
  return (
    <div className='home'>
      <h1 className='welcome'>Welcome to Career Advisor</h1>
      <p className="introduction">
  We specialize in guiding you toward the perfect career path. Whether you're a 
  student exploring future opportunities or a professional looking to transition 
  into a new field, our intelligent career advisor provides personalized insights 
  to help you make informed decisions.
</p>

<p className="introduction">
  <strong>What We Offer:</strong>
  <ul>
    <li>Career predictions tailored to your strengths and interests.</li>
    <li>Detailed skill requirements for various job roles.</li>
    <li>Up-to-date job market trends to keep you ahead.</li>
  </ul>
</p>

      
    </div>
  );
};

export default Home;
