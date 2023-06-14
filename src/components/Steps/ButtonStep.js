import React from 'react';

import './FinalStep.css'; 

const FinalStep = ({ formData }) => {
  // Define a mapping from group codes to hashtags
  const groupHashtags = {
    'Student21': '#STU21',
    'Student22': '#STU22',
    'REDU': '#REDUFAF',
    'Community': '#COMM',
    // Add more mappings as needed...
  };

  // Let's say the code is a random string. You may replace it with your actual logic
  const code = Math.random().toString(36).substring(2, 8).toUpperCase();
  
  // Get the hashtag for the selected group, or use a default if the group is not in the mapping
  const hashtag = groupHashtags[formData.group] || '#DefaultHashtag';
  
  const message = `Hello from ${formData.country}! ${formData.username} here!\n\n${code}. ${hashtag} #REDU #REDU100kGiveaway #Giveaway #Crypto #Bitcoin #ETH`;

  const handleClick = () => {
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(message)}`);
  }

  return (
    <div className="final-step-container">
      <h5 className='text-shine'>Stellar work, cadet! You've made it to the last frontier. 
Before you hit 'Post to Twitter', remember, the stars are watching! Copy the promotional text below and create a LinkedIn post as well. This is your chance to shine brighter than the rest. So be sure to post on both platforms, because that's where we'll be hunting for our winners. If your journey looks good, hit 'Post to Twitter' and let the space race begin!
</h5>
      <textarea readonly value={message} />
      <button onClick={handleClick}>Post to Twitter</button>
    </div>
  );
}

export default FinalStep;
