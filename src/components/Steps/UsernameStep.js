import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './UsernameStep.css'; 

function UsernameStep({ formData, setFormData }) {
  const navigate = useNavigate();
  const location = useLocation();

  // Error state for input validation
  const [error, setError] = useState('');

  const [username, setUsername] = useState(formData.username || '');

  useEffect(() => {
    // When we come back to this step, we clear any previous error
    if(location.pathname === '/step-one') setError('');
  }, [location]);

  const handleNext = () => {
    // Check if the username is entered and is a valid twitter handle
    if(username === '' || !username.startsWith('@')) {
      setError('Please enter a valid twitter handle');
      return;
    }

    setFormData({ ...formData, username });
    
    navigate('/step-two');
  }

  const handleBack = () => {
    navigate(-1);
  }

  return (
    <div className="username-container">
      <h2 className='text-shine'>Enter your twitter handle</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        maxLength={15} // Twitter handles are 15 characters max
      />
      {error && <p>{error}</p>}
      <button onClick={handleNext}>Next</button>
      <button onClick={handleBack}>Back</button>
    </div>
  );
}

export default UsernameStep;
