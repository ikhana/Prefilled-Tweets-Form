import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './UsernameStep.css'; 

function UsernameStep({ formData, setFormData }) {
  const navigate = useNavigate();
  
 
  const [username, setUsername] = useState(formData.username || '');

  const handleNext = () => {
   
    setFormData({ ...formData, username });
    
   
    navigate('/step-two');
  }

  return (
    <div className="username-container">
      <h2 className='text-shine'>Enter your twitter handle</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleNext}>Next</button>
    </div>
  );
}

export default UsernameStep;
