import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RadioGroup, ReversedRadioButton } from 'react-radio-buttons';
import './GroupStep.css';

function GroupStep({ formData, setFormData }) {
  const navigate = useNavigate();

  // Use formData.group as initial value if it exists, otherwise default to 'student'
  const [group, setGroup] = useState(formData.group || 'student');

  const handleNext = () => {
    setFormData({ ...formData, group });
    navigate('/final-step');
  }
  const handleBack = () => {
    navigate(-1); // Goes back to the previous page (StepThree)
  }

  return (
    <div className="username-container">
      <h2 className='text-shine'>What group do you belong to?</h2>
      <RadioGroup 
        horizontal={false} 
        value={group}
        onChange={setGroup}
        className="radio-group">
        <ReversedRadioButton value="student">Student</ReversedRadioButton>
        <ReversedRadioButton value="team">Team</ReversedRadioButton>
        <ReversedRadioButton value="general">General Population</ReversedRadioButton>
      </RadioGroup>
      <div style={{ display: "flex", justifyContent: "space-between", width: "40%" }}>
        <button onClick={handleBack}>Back</button>
        <button onClick={handleNext} >Next</button>
      </div>
    </div>
  );
}

export default GroupStep;
