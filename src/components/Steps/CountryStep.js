import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Select from 'react-select';
import axios from 'axios';
import './CountryStep.css';

function CountryStep({ formData, setFormData }) {
  const navigate = useNavigate();

  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState('');

  useEffect(() => {
    const fetchCountries = async () => {
      const response = await axios.get('https://restcountries.com/v3.1/all');
      const countries = response.data.map((country) => ({
        value: country.name.common,
        label: country.name.common,
      }));
      setCountries(countries);
    };
    fetchCountries();
  }, []);

  const handleNext = () => {
    setFormData({ ...formData, country: country.value });
    navigate('/step-five');  // or whatever is the next step
  };

  return (
    <div className="username-container">
      <h2 className='text-shine'>Select your country</h2>
     <Select
  options={countries}
  value={country}
  onChange={setCountry}
  className="select"
  styles={{
    option: provided => ({ ...provided, color: 'black' }),
  
  }}
/>
      <button onClick={handleNext} disabled={!country}>Next</button>
    </div>
  );
}

export default CountryStep;
