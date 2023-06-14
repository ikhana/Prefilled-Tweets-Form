import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './UsernameStep.css'; 

function LinkedInStep({ formData, setFormData }) {
  const navigate = useNavigate();

  // Load LinkedIn URL from localStorage if it exists, else from formData, else default to an empty string
  const [linkedin, setLinkedIn] = useState(localStorage.getItem('linkedin') || formData.linkedin || '');

  useEffect(() => {
    // Whenever LinkedIn URL changes, update formData and save LinkedIn URL in localStorage
    setFormData({ ...formData, linkedin });
    localStorage.setItem('linkedin', linkedin);
  }, [linkedin]);

  const handleNext = () => {
    navigate('/step-three');
  }

  const handleBack = () => {
    navigate('/step-one');
  }

  return (
    <div className="username-container">
      <h2 className='text-shine'>"Time to unleash your professional side! Share your LinkedIn URL and let us see what you bring to the table!"
</h2>
      <input
        type="url"
        placeholder="LinkedIn URL"
        value={linkedin}
        onChange={(e) => setLinkedIn(e.target.value)}
      />
      <p>Hint: Please enter your LinkedIn profile URL</p>
      <div style={{ display: "flex", justifyContent: "space-between", width: "40%" }}>
        <button onClick={handleBack}>Back</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
}

export default LinkedInStep;
