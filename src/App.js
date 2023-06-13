import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StartStep from './components/Steps/StartStep';
import StepOne from './components/Steps/UsernameStep';
import StepTwo from './components/Steps/LinkedInStep';
import StepThree from './components/Steps/EmailStep';
import StepFour from './components/Steps/CountryStep';
import StepFive from './components/Steps/GroupStep';
import FinalStep from './components/Steps/ButtonStep';
import './App.css';

const App = () => {
  // Initializing state for form data
  const [formData, setFormData] = useState({
    username: '',
    linkedin: '',
    email:'',
    country: '',
    group: ''
  });

  return (
    <Router>
      <div className="App">
        <Routes>
           <Route exact path="/" element={<StartStep />} />
          <Route path="/step-one" element={<StepOne formData={formData} setFormData={setFormData} />} />
          <Route path="/step-two" element={<StepTwo formData={formData} setFormData={setFormData} />} />
          <Route path="/step-three" element={<StepThree  formData={formData} setFormData={setFormData} />} />
          <Route path="/step-four" element={<StepFour formData={formData} setFormData={setFormData} />} />
          <Route path="/step-five" element={<StepFive formData={formData} setFormData={setFormData} />} />
          <Route path="/final-step" element={<FinalStep  formData={formData} />} />


        </Routes>
      </div>
    </Router>
  );
}

export default App;
