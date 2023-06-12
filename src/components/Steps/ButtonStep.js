import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FinalStep.css'

function FinalStep({ formData }) {
  const navigate = useNavigate();

  const twitterText = `Join me in the RE-DUGIVEAWAY! I'm participating and you should too! #crypto #ETH #REDUGIVEAWAY. 
  Learn more at www.yourwebsite.com. Let's support this great cause together!`;

  const linkedInText = `I'm thrilled to be part of the RE-DUGIVEAWAY! 
  Join me in supporting this incredible cause. Together, we can make a difference. 
  Participate and learn more at www.yourwebsite.com. #crypto #ETH #REDUGIVEAWAY`;

  const handleFinish = () => {
    // ...Handle finish logic here
  }

  const handleTwitterPost = () => {
    // encode the text to be URL friendly
    const encodedText = encodeURIComponent(twitterText);
    window.open(`https://twitter.com/intent/tweet?text=${encodedText}`, "_blank");
  }

  return (
    <div className="final-step-container">
      <h2>Thank you for participating!</h2>
     

      <h3>Your promotional posts for LinkedIn</h3>
      <textarea value={linkedInText} readOnly />

      <button onClick={handleTwitterPost}>Post to Twitter</button>
      <button onClick={handleFinish}>Finish</button>
    </div>
  );
}

export default FinalStep;
