import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RadioGroup, Radio } from 'react-radio-group';
import './GroupStep.css';


function GroupStep({ formData, setFormData }) {
  const navigate = useNavigate();

  // Use formData.group as initial value if it exists, otherwise default to 'student'
  const [group, setGroup] = useState(formData.group || 'student');

  const handleNext = () => {
    setFormData({ ...formData, group });
    navigate('/final-step');
  }

  return (
    <div className="username-container">
      <h2 className='text-shine'>What group do you belong to?</h2>
      <RadioGroup 
        name="group" 
        selectedValue={group}
        onChange={setGroup}>
        <label>
          <Radio value="student" /> Student
        </label>
        <label>
          <Radio value="team" /> Team
        </label>
        <label>
          <Radio value="general" /> General Population
        </label>
      </RadioGroup>
      <button onClick={handleNext}>Next</button>
    </div>
  );
}

export default GroupStep;
