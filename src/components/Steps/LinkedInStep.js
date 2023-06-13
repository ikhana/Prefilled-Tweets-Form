import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './UsernameStep.css'; 

function LinkedInStep({ formData, setFormData }) {
  const navigate = useNavigate();
  const [linkedin, setLinkedIn] = useState(formData.linkedin || '');
  const [error, setError] = useState(null);

  const handleNext = () => {
    // Basic validation to check if the url is a LinkedIn URL
    try {
      const url = new URL(linkedin);
      if (!url.hostname.match('linkedin.com')) {
        setError("Invalid LinkedIn URL. Please enter a valid LinkedIn URL");
      } else {
        setError(null);
        setFormData({ ...formData, linkedin });
        navigate('/step-three');
      }
    } catch (_) {
      setError("Invalid URL. Please enter a valid URL");
    }
  }

  const handleBack = () => {
    navigate(-1);
  }

  return (
    <div className="username-container">
      <h2 className='text-shine'>Your LinkedIn URL Please ?</h2>
      <input
        type="url"
        placeholder="LinkedIn URL"
        value={linkedin}
        onChange={(e) => setLinkedIn(e.target.value)}
      />
       {error && <p>{error}</p>}
      <div style={{ display: "flex", justifyContent: "space-between", width: "40%" }}>
        <button onClick={handleBack}>Back</button>
        <button onClick={handleNext}>Next</button>
      </div>
     
    </div>
  );
}

export default LinkedInStep;
