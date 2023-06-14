import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './UsernameStep.css'; 

function UsernameStep({ formData, setFormData }) {
  const navigate = useNavigate();
  const location = useLocation();

  // Load username from localStorage if it exists, else from formData, else default to an empty string
  const [username, setUsername] = useState(localStorage.getItem('username') || formData.username || '');

 

  useEffect(() => {
    // Whenever username changes, update formData and save username in localStorage
    setFormData({ ...formData, username });
    localStorage.setItem('username', username);
  }, [username]);

  const handleNext = () => {
    navigate('/step-two');
  }

  const handleBack = () => {
    navigate(-1);
  }

  return (
    <div className="username-container">
      <h2 className='text-shine'>
        "Alright, commander! It's time to identify your Twitter handle. 
         This is your personal badge in our cosmos. Enter it below and let's keep flying!"
      </h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        maxLength={30} 
      />
      <p>Hint: Please enter your Twitter handle (e.g., @yourusername)</p>
      <div style={{ display: "flex", justifyContent: "space-between", width: "40%" }}>
        <button onClick={handleBack}>Back</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
}

export default UsernameStep;
