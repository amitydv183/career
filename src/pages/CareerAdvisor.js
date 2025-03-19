import React, { useState } from 'react';
import SkillForm from '../components/SkillForm';
import PredictionResult from '../components/PredictionResult';

const CareerAdvisor = () => {
  const [prediction, setPrediction] = useState(null);

  return (
    <div>
      <h1>Career Advisor</h1>
      <SkillForm onPrediction={setPrediction} />
      <PredictionResult result={prediction} />
    </div>
  );
};

export default CareerAdvisor;
