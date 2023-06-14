import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './UsernameStep.css'; 

function EmailStep({ formData, setFormData }) {
  const navigate = useNavigate();
  
  // Load email from localStorage if it exists, else from formData, else default to an empty string
  const [email, setEmail] = useState(localStorage.getItem('email') || formData.email || '');

  useEffect(() => {
    // Whenever email changes, update formData and save email in localStorage
    setFormData({ ...formData, email });
    localStorage.setItem('email', email);
  }, [email]);

  const handleNext = () => {
    navigate('/step-four');
  }

  const handleBack = () => {
    navigate('/step-two');
  }

  return (
    <div className="username-container">
      <h2 className='text-shine'>"We promise no alien spam! Drop your email in the box below. It's our hotline for important updates and winner announcements."</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
     
      <div style={{ display: "flex", justifyContent: "space-between", width: "40%" }}>
        <button onClick={handleBack}>Back</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
}

export default EmailStep;
