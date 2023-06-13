import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FinalStep.css'; 

const FinalStep = ({ formData }) => {
  const navigate = useNavigate();

  // Let's say the code is a random string. You may replace it with your actual logic
  const code = Math.random().toString(36).substring(2, 8).toUpperCase();
  
  const message = `Hello from ${formData.country}! ${formData.group} here!\n\n${code}. #REDU #REDU100kGiveaway #Giveaway #Crypto #Bitcoin #ETH`;

  const handleClick = () => {
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(message)}`);
  }

  return (
    <div className="final-step-container">
    
      <h3>Your message:</h3>
      <textarea readonly value={message} />
      <button onClick={handleClick}>Post to Twitter</button>
    </div>
  );
}

export default FinalStep;
