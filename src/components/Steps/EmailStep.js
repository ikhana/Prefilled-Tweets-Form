import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './UsernameStep.css'; 

function EmailStep({ formData, setFormData }) {
  const navigate = useNavigate();
  
  const [email, setEmail] = useState(formData.email || '');
  const [error, setError] = useState('');

  // Regular expression for email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleNext = () => {
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setFormData({ ...formData, email});
    navigate('/step-four');
  }

  const handleBack = () => {
    navigate('/step-two'); // Goes back to the previous page (StepTwo)
  }

  return (
    <div className="username-container">
      <h2 className='text-shine'>Your email Please ?</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div style={{ display: "flex", justifyContent: "space-between", width: "40%" }}>
        <button onClick={handleBack}>Back</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
}

export default EmailStep;
