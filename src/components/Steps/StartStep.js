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
      <h1>Welcome to our form!</h1>
      <button onClick={handleStart}>Start</button>
    </div>
  );
};

export default StartStep;
