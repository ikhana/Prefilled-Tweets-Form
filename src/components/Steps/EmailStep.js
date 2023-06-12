import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './UsernameStep.css'; 

function EmailStep({ formData, setFormData }) {
  const navigate = useNavigate();
  
  
  const [email, setEmail] = useState(formData.email|| '');

  const handleNext = () => {
   
    setFormData({ ...formData,  email});
    
  
    navigate('/step-four');
  }

  return (
    <div className="username-container">
      <h2 className='text-shine'>Your email Please ?</h2>
      <input
        type="text"
        placeholder="Username"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleNext}>Next</button>
    </div>
  );
}

export default EmailStep;
