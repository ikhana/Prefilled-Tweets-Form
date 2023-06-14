import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './UsernameStep.css'; 

function EmailStep({ formData, setFormData }) {
  const navigate = useNavigate();
  
  const [email, setEmail] = useState(formData.email || '');

  const handleNext = () => {
    setFormData({ ...formData, email});
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
