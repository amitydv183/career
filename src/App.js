import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
//import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import SkillsComponent from './pages/SkillsComponent';
import JobMarketTrends from './pages/JobMarketTrends';
import CareerAdvisor from './pages/CareerAdvisor';

function App() {
  return (
    <Router>
      <div >
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<SkillsComponent />} />
          <Route path="/job" element={<JobMarketTrends/>} />
          <Route path="/career-advisor" element={<CareerAdvisor />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
