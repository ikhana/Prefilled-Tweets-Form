import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './UsernameStep.css'; 

function LinkedInStep({ formData, setFormData }) {
  const navigate = useNavigate();
  
  
  const [linkedin, setLinkedIn] = useState(formData.linkedin || '');

  const handleNext = () => {
   
    setFormData({ ...formData,  linkedin});
    
  
    navigate('/step-three');
  }

  return (
    <div className="username-container">
      <h2 className='text-shine'>Your LinkedIn URL Please ?</h2>
      <input
        type="text"
        placeholder="Username"
        value={linkedin}
        onChange={(e) => setLinkedIn(e.target.value)}
      />
      <button onClick={handleNext}>Next</button>
    </div>
  );
}

export default LinkedInStep;
