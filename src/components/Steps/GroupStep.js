import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RadioGroup, ReversedRadioButton } from 'react-radio-buttons';
import './GroupStep.css';

function GroupStep({ formData, setFormData }) {
  const navigate = useNavigate();

  // Use formData.group as initial value if it exists, otherwise default to 'Student21'
  const [group, setGroup] = useState(formData.group || 'Student21');

  const handleNext = () => {
    setFormData({ ...formData, group });
    navigate('/final-step');
  }
  const handleBack = () => {
    navigate(-1); // Goes back to the previous page
  }

  return (
    <div className="username-container">
      <h2 className='text-shine'>"Time to pick your crew! What group are you part of? Your choice might tip the cosmic scales in your favor!"
</h2>
      <RadioGroup 
        horizontal={false} 
        value={group}
        onChange={setGroup}
        className="radio-group">
        <ReversedRadioButton value="Student21">Student21 - Age 21 & Younger</ReversedRadioButton>
        <ReversedRadioButton value="Student22">Student22 - Age 22 & Older</ReversedRadioButton>
        <ReversedRadioButton value="REDU">REDU - Team/Family/Friends</ReversedRadioButton>
        <ReversedRadioButton value="Community">Community - Everyone!</ReversedRadioButton>
      </RadioGroup>
      <div style={{ display: "flex", justifyContent: "space-between", width: "40%" }}>
        <button onClick={handleBack}>Back</button>
        <button onClick={handleNext} >Next</button>
      </div>
    </div>
  );
}

export default GroupStep;
