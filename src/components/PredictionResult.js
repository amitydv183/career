import React from 'react';

const PredictionResult = ({ result }) => {
  if (!result) return null;

  return (
    <div>
      <h2>Career Prediction</h2>
      <p><strong>Recommended Role:</strong> {result.predicted_role}</p>
      <h3>Probabilities:</h3>
      <ul>
        {result.probabilities.map((prob, index) => (
          <li key={index}>Role {index + 1}: {prob.toFixed(2)}</li>
        ))}
      </ul>
    </div>
  );
};

export default PredictionResult;
