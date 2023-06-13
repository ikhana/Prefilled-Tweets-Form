import React from 'react';
import { useNavigate } from 'react-router-dom';
import './UsernameStep.css'

const StartStep = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/step-one');
  };

  return (
    <div className='username-container'>
      <h3>"Hey superstar! Buckle up for an adventure into the Twitterverse. Click 'Start' and let's rocket launch into this escapade!"</h3>
      <button onClick={handleStart}>Start</button>
    </div>
  );
};

export default StartStep;
